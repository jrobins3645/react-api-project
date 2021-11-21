interface Images {
  url: string;
}

interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
}

interface Dates {
  start: Start;
}

interface PriceRanges {
  type: string;
  currency: string;
  min: number;
  max: number;
}

interface Embedded {
  venues: Venue[];
}

interface City {
  name: string;
}

interface State {
  name: string;
  stateCode: string;
}

interface Country {
  name: string;
  countryCode: string;
}

interface Venue {
  name: string;
  city: City;
  state: State;
  country: Country;
}

export default interface Event {
  id: string;
  name: string;
  url: string;
  images: Images[];
  dates: Dates;
  priceRanges?: PriceRanges[] | undefined;
  _embedded: Embedded;
}
