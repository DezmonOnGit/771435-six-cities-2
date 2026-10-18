import {Command} from "./command.interface.js";
import {TsvFileReader} from "../../shared/libs/index.js";

export class ImportCommand implements Command {
  getName(): string {
    return '--import';
  }

  execute(..._parameters: string[]): void {
    const [path] = _parameters;
    const fileReader = new TsvFileReader(path.trim());

    try {
      fileReader.read();
      console.log(fileReader.format());
    } catch (err) {

      if(!(err instanceof Error)) {
        throw err;
      }

      console.error(`Cant import data from ${path}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
