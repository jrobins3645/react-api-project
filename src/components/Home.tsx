import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Event from "../models/Event";
import {
  getTrendingEvents,
  getEventsBySearchTerm,
} from "../services/EventService";
import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [location, setLocation] = useState("");
  const searchTerm: string | null = new URLSearchParams(
    useLocation().search
  ).get("keyword");
  const searchDate: string | null = new URLSearchParams(
    useLocation().search
  ).get("startDateTime");
  const searchRadius: string | null = new URLSearchParams(
    useLocation().search
  ).get("radius");
  const searchCity: string | null = new URLSearchParams(
    useLocation().search
  ).get("city");

  useEffect(() => {
    if (searchTerm || searchDate || searchCity || searchRadius) {
      getEventsBySearchTerm({
        searchTerm,
        searchDate,
        searchCity,
        searchRadius,
      }).then((response) => {
        if (response._embedded) {
          setEvents(response._embedded.events);
        } else {
          setEvents([]);
        }
      });
    } else {
      navigator.geolocation.getCurrentPosition((response) => {
        const coords = `${response.coords.latitude},${response.coords.longitude}`;
        setLocation(coords);
        getTrendingEvents(coords).then((data) => {
          setEvents(data._embedded.events);
        });
      });
    }
  }, [searchTerm, searchDate, searchCity, searchRadius]);
  return (
    <div className="Home">
      {events.length > 0 ? (
        <>
          <SearchForm />
          <EventList events={events} />
        </>
      ) : (
        <div className="h2Container">
          <h2>No Events Found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
