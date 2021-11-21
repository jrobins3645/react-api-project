import "./SingleEvent.css";
import Event from "../models/Event";
import BucketContext from "../context/BucketContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  event: Event;
  i: number;
}

const SingleEvent = ({ event, i }: Props) => {
  console.log(event._embedded, event, i);
  const { addBucket, removeBucket, isBucket } = useContext(BucketContext);

  const correctedDate: string =
    event.dates.start.localDate.slice(5, 7) +
    "-" +
    event.dates.start.localDate.slice(8) +
    "-" +
    event.dates.start.localDate.slice(0, 4);

  return (
    <tr className="Event">
      <td className="td1">
        {event.hasOwnProperty("images") ? (
          <Link to={`/events/${event?.id}/details`}>
            <img
              src={event?.images[0].url}
              alt={`${event?.name} thumbnail`}
              className="eventImage"
            />
          </Link>
        ) : (
          <h4>Image Unavailable</h4>
        )}
      </td>
      <td className="td2">
        <h3>
          {event.hasOwnProperty("name") ? (
            <Link to={`/events/${event?.id}/details`} className="detailsLink">
              {event.name}
            </Link>
          ) : (
            "Name Unavailable"
          )}
        </h3>
      </td>
      <td className="td3">
        {event.hasOwnProperty("dates") ? (
          <h4>{correctedDate}</h4>
        ) : (
          <h4>Date Unavailable</h4>
        )}
      </td>
      <td className="td4">
        <div>
          {event?._embedded?.venues?.length &&
          event._embedded.venues[0].city &&
          event._embedded.venues[0].state &&
          event._embedded.venues[0].city.hasOwnProperty("name") &&
          event._embedded.venues[0].state.hasOwnProperty("stateCode") ? (
            <h4>
              {event._embedded.venues[0].city.name},{" "}
              {event._embedded.venues[0].state.stateCode}
            </h4>
          ) : (
            <h4>N/A</h4>
          )}

          {event?._embedded?.venues?.length &&
          event._embedded.venues[0].name ? (
            <h4>{event._embedded.venues[0].name}</h4>
          ) : (
            <h4>Venue Unavailable</h4>
          )}
        </div>
      </td>
      <td className="td5">
        {event?.priceRanges ? (
          <h4>
            ${event.priceRanges[0].min.toFixed(0)} - $
            {event.priceRanges[0].max.toFixed(0)}
          </h4>
        ) : (
          <h4>Price Unavailable</h4>
        )}
      </td>
      <td className="td6">
        <h4>Bucket List</h4>
        {!isBucket(event?.id) ? (
          <i className="far fa-star" onClick={() => addBucket(event)}></i>
        ) : (
          <i className="fas fa-star" onClick={() => removeBucket(event.id)}></i>
        )}
      </td>
    </tr>
  );
};

export default SingleEvent;
