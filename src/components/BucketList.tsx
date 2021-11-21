import { useContext } from "react";
import { useHistory } from "react-router-dom";
import BucketContext from "../context/BucketContext";
import "./BucketList.css";
import EventList from "./EventList";

const BucketList = () => {
  const { bucketList } = useContext(BucketContext);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="BucketList">
      <p className="back-home" onClick={goBack}>
        <i className="fas fa-caret-left"></i> Back to search results
      </p>
      <div className="eventList">
        <EventList events={bucketList} />
      </div>
    </div>
  );
};

export default BucketList;
