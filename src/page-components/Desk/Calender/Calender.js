import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getEvents } from "../../../actions/actions";

function Calender() {
  const [initalEvents, setInitialEvents] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("googleEmail");
    getEvents(email).then((res) => setInitialEvents(res));
  }, []);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        editable={true}
        selectable={true}
        events={initalEvents}
      />
    </>
  );
}

export default Calender;
