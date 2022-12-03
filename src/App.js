import React, { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import Description from "./description";

export default function App() {
  const [value, setDate] = useState(new Date());
  const [toggle, setToggle] = useState(true);
  const [nameReceived, setnameReceived] = useState();
  const [dateReceived, setdateReceived] = useState();
  const [namelocateReceived, setlocateReceived] = useState();
  const [dayVal, setDayVal] = useState();
  const toggleChecked = () => {
    // e.preventDefault();
    setToggle((toggle) => !toggle);
  };

  console.log(dayVal);
  const toggleChecked1 = (obj) => {
    console.log(obj);
    setToggle((toggle) => !toggle);
    setnameReceived(obj[0]);
    setdateReceived(obj[1]);
    setlocateReceived(obj[2]);
  };

  return (
    <div>
      {toggle && (
        <Calendar
          tileContent={
            ({ activeStartDate, date, view }) =>
              view === "month" &&
              activeStartDate === dayVal &&
              nameReceived !== null &&
              nameReceived !== undefined ? (
                <p>{nameReceived}</p>
              ) : null
            // console.log(
            //   "date.getUTCMonth()",
            //   date.getUTCMonth(),
            //   "activeStartDate",
            //   activeStartDate,
            //   "date",
            //   date,
            //   "view::",
            //   view
            // )
            // {console.log(dayVal)
          }
          // onClickDay={toggleChecked}
          onClickDay={(value, event) => {
            console.log(value, event);
            if (event.type === "click") {
              console.log(event.target.innerHTML);
              // event.target.innerText += "";
              setDayVal(value);
              toggleChecked();
            }
          }}
        />
      )}
      {!toggle && <Description toggleChecked1={toggleChecked1} />}
      {nameReceived}
    </div>
  );
}

// export default function App() {
//   const [value, setDate] = useState(new Date());

//   return (
//     <>
//       <Calendar value={value} />;
//     </>
//   );
// }
