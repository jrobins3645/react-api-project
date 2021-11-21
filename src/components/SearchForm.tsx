import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchForm.css";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [city, setCity] = useState("");
  const [radius, setRadius] = useState("");
  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    history.push(
      `/events/search?${new URLSearchParams({
        ...(keyword ? { keyword } : {}),
        ...(startDateTime ? { startDateTime } : {}),
        ...(city ? { city } : {}),
        ...(radius ? { radius } : {}),
      })}`
    );
  };
  const disabledClass = (e: any): void => {
    !e.target.value
      ? (e.target.className += " disabled")
      : (e.target.className = "input");
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <input
        type="text"
        name="term"
        id="term"
        value={keyword}
        placeholder="Keyword"
        onChange={(e) => setKeyword(e.target.value)}
        className="input"
      />
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDateTime}
        placeholder="Enter Start Date"
        onChange={(e) => {
          setStartDateTime(e.target.value);
          disabledClass(e);
        }}
        className="input disabled"
      />
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />
      <select
        name="distance"
        id="distance"
        onChange={(e) => {
          setRadius(e.target.value);
          disabledClass(e);
        }}
        className="input disabled"
      >
        <option value="" disabled selected>
          Distance
        </option>
        <option value="10">10 miles</option>
        <option value="25">25 miles</option>
        <option value="50">50 miles</option>
      </select>
      <button className="input" id="searchButton">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
