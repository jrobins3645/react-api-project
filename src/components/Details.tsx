import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEventById } from "../services/EventService";
import "./Details.css";
import Event from "../models/Event";
import { useHistory } from "react-router-dom";

interface RouteParams {
  id: string;
}

const Details = () => {
  const [singleEvent, setSingleEvent] = useState<Event>();
  const id = useParams<RouteParams>().id;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getEventById(id).then((response) => {
      console.log(response.dates.start.localTime);
      return setSingleEvent(response);
    });
  }, [id]);

  let time: string | undefined = singleEvent?.dates.start.localTime;
  if (time?.charAt(0) === "1" && parseInt(time?.charAt(1)) > 2) {
    time = `${(parseInt(time?.slice(0, 2)) - 12).toString()}${time?.slice(
      2,
      5
    )} PM`;
  } else if (parseInt(time!?.slice(0, 2)) === 12) {
    time = `${time?.slice(0, -3)} PM`;
  } else {
    time = `${time?.slice(0, -3)} AM`;
  }

  const correctedDate: string =
    singleEvent?.dates.start.localDate.slice(5, 7) +
    "-" +
    singleEvent?.dates.start.localDate.slice(8) +
    "-" +
    singleEvent?.dates.start.localDate.slice(0, 4);

  return (
    <div className="Details">
      {singleEvent?.hasOwnProperty("name") ? (
        <h2>{singleEvent?.name}</h2>
      ) : (
        <h2>Name Unavailable</h2>
      )}
      {singleEvent?.hasOwnProperty("images") ? (
        <img
          src={singleEvent?.images[0].url}
          alt={`${singleEvent?.name} thumbnail`}
          className="detailsImage"
        />
      ) : (
        <h4>Image Unavailable</h4>
      )}
      <div className="date-time">
        <h4>Date: {correctedDate}</h4>
        {time === undefined ? <h4> Time: TBD</h4> : <h4> Time: {time}</h4>}
      </div>
      {singleEvent?._embedded?.venues?.length &&
      singleEvent._embedded.venues[0].city &&
      singleEvent._embedded.venues[0].state &&
      singleEvent._embedded.venues[0].city.hasOwnProperty("name") &&
      singleEvent._embedded.venues[0].state.hasOwnProperty("stateCode") ? (
        <h4>
          Location: {singleEvent?._embedded.venues[0].city.name},{" "}
          {singleEvent?._embedded.venues[0].state.stateCode}
        </h4>
      ) : (
        <h4>Location Unavailable</h4>
      )}
      {singleEvent?._embedded?.venues?.length &&
      singleEvent._embedded.venues[0].name ? (
        <h4>Venue: {singleEvent?._embedded.venues[0].name}</h4>
      ) : (
        <h4>Venue Unavailable</h4>
      )}

      {singleEvent?.priceRanges ? (
        <h4>
          Price: ${singleEvent.priceRanges[0].min.toFixed(0)}-$
          {singleEvent.priceRanges[0].max.toFixed(0)}
        </h4>
      ) : (
        <h4>Price Unavailable</h4>
      )}
      {singleEvent?.hasOwnProperty("url") ? (
        <h4>
          <a className="purchase" href={`${singleEvent?.url}`}>
            Purchase tickets at TicketMaster
          </a>
        </h4>
      ) : (
        <h4>TicketMaster link Unavailable</h4>
      )}
      <p className="back-home" onClick={goBack}>
        <i className="fas fa-caret-left"></i> Back to search results
      </p>
    </div>
  );
};

export default Details;
