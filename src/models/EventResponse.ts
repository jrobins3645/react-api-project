import Event from "./Event";

interface Embedded {
  events: Event[];
}

export default interface EventResponse {
  _embedded: Embedded;
}
