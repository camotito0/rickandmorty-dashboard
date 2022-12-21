export interface ICharacter {
  info: IInfo;
  results: IResult[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface ILocation {
  name: string;
  url: string;
}

export class Character {
  results: Result[];

  constructor(character: ICharacter){
    this.results = character.results.map((character) => new Result(character))
  }
}

export class Result {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;

  constructor(result: IResult) {
    this.id = result.id;
    this.name = result.name;
    this.status = result.status;
    this.species = result.species;
    this.gender = result.gender;
    this.origin = result.origin;
    this.location = result.location;
    this.image = result.image;
  }
}
