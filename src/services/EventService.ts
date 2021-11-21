import axios from "axios";
import EventResponse from "../models/EventResponse";
import Event from "../models/Event";

const key: string = process.env.REACT_APP_TICKETMASTER_KEY || "";

// function to get trending gifs
export const getTrendingEvents = (location: string): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: { latlong: location, apikey: key },
    })
    .then((response) => {
      return response.data;
    });
};

// function to get events by search term

export const getEventsBySearchTerm = (qsp: any): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: {
        apikey: key,
        ...(qsp.searchTerm ? { keyword: qsp.searchTerm } : {}),
        ...(qsp.searchRadius ? { radius: qsp.searchRadius } : {}),
        ...(qsp.searchDate
          ? { startDateTime: `${qsp.searchDate}T14:00:00Z` }
          : {}),
        ...(qsp.searchCity ? { city: qsp.searchCity } : {}),
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

// // function to get a event by id
export const getEventById = (id: string): Promise<Event> => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events/${encodeURIComponent(
        id
      )}.json`,
      {
        params: { apikey: key },
      }
    )
    .then((response) => {
      return response.data;
    });
};
