export interface ICharacterDetail {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export interface ILocation {
  name: string;
  url:  string;
}

export class CharacterDetail {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  url:      string;
  created:  Date;

  constructor(character: ICharacterDetail) {
    this.id = character.id;
    this.name = character.name;
    this.status = character.status;
    this.species = character.species;
    this.gender = character.gender;
    this.origin = character.origin;
    this.location = character.location;
    this.image = character.image;
    this.url = character.url;
    this.created = character.created;
  }
}
