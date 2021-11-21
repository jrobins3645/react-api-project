import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Event Den</h1>
      </Link>
      <div className="BucketAttributionContainer">
        <Link to="/events/bucketlist">
          <h2>Bucket List</h2>
        </Link>
        <p>
          <a href="https://developer.ticketmaster.com/">
            Powered by TicketMaster
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
