import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import {Offer} from '../types/offer.type.js';
import {OfferType} from '../types/offer-types.type.js';
import {Amenity} from '../types/amenity.type.js';

export class TsvFileReader implements FileReader {
  private fileData = '';

  constructor(private readonly filePath: string) {
  }

  public read(): void {
    this.fileData = readFileSync(this.filePath, 'utf-8');
  }

  public format(): Offer[] {
    if(!this.fileData) {
      throw new Error('File doesnt read');
    }

    return this.fileData.split('\n')
      .filter((row) => row.trim().length > 0)
      .map((row) => row.split('\t'))
      .map(([name, description, date, city, previewImage, images, isPremium, isFavourite, rating, type, roomQty, guestQty, count, amenities, author, commentsQty, latitude, longitude]) => ({
        name,
        description,
        date,
        city: {name: city},
        previewImage,
        images: images.split(';'),
        isPremium: !!isPremium,
        isFavourite: !!isFavourite,
        rating: Number(rating),
        type: type as OfferType,
        roomQty: Number(roomQty),
        guestQty: Number(guestQty),
        count: Number(count),
        amenities: amenities.split(';') as Amenity[],
        author: {
          name: author.split(';')[0],
          email: author.split(';')[1],
        },
        commentsQty: Number(commentsQty),
        coordinates: {
          latitude,
          longitude,
        },
      }));
  }
}
