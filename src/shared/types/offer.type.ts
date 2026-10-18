import {City} from './city.type.js';
import {Amenity} from './amenity.type.js';
import {OfferType} from './offer-types.type.js';
import {User} from './user.type.js';
import {Coordinates} from './coordinates.type.js';

export type Offer = {
  name: string;
  description: string;
  date: string;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
  type: OfferType;
  roomQty: number;
  guestQty: number;
  count: number;
  amenities: Amenity[];
  author: User;
  commentsQty: number;
  coordinates: Coordinates;
};
