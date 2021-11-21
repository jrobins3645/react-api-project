import Event from "../models/Event";
import "./EventList.css";
import SingleEvent from "./SingleEvent";

interface Props {
  events: Event[];
}

const EventList = ({ events }: Props) => {
  return (
    <div className="EventList">
      <table className="eventTable">
        <tbody>
          {events ? (
            events.map((item, i) => (
              <SingleEvent event={item} key={item.id} i={i} />
            ))
          ) : (
            <p>loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
