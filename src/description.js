import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./description.css";
import "./App.css";
import App from "./App";
// import Description from './description';
export default function Description({ toggleChecked1 }) {
  // const { toggleChecked1 } = props;
  const [name, setName] = useState("");
  const [dataTime, setDatetime] = useState("");
  const [meetLocate, setMeetLocation] = useState("");
  const [meetAbout, setMeetingDetail] = useState("");
  let obj = { name, dataTime, meetLocate, meetAbout };

  const handleOnclick = () => {
    toggleChecked1([name, dataTime, meetLocate, meetAbout]);
    console.log("clicked");
  };
  return (
    <div className="form1">
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
            obj.name = e.target.value;
          }}
        />
        <br />
        <label>DataTime:</label>
        <br />
        <input
          type="text"
          value={dataTime}
          required
          onChange={(e) => {
            setDatetime(e.target.value);
            obj.dataTime = e.target.value;
          }}
        />
        <br />
        <label>MeetLocate</label>
        <br />
        <input
          type="text"
          value={meetLocate}
          required
          onChange={(e) => {
            setMeetLocation(e.target.value);
            obj.setMeetLocation = e.target.value;
          }}
        />
        <br />
        <label>Note:</label>
        <br />
        <textarea
          type="text"
          value={meetAbout}
          required
          onChange={(e) => {
            setMeetingDetail(e.target.value);
            obj.setMeetingDetail = e.target.value;
          }}
        />
        <br />
        <button onClick={handleOnclick}>Submit</button>
      </form>
    </div>
  );
}
