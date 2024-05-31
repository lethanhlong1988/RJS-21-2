import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function EventsPage() {
  async function fetchEvents() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
      //Thong bao loi va su ly ....
    } else {
      const resData = await response.json();
      console.log(resData);
    }
  }
  fetchEvents();
  return (
    <>
      <h3>Events Page</h3>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
