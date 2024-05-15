import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [fetchedEvents, setFetchedEvents] = useState();
  useEffect(() => {
    async function fetchEvents() {
      // try { } catch(error) {}
      const response = await fetch("http://localhost:8080/events");
      if (!response.ok) {
        console.log("Fetch failed!");
        return;
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    console.log(fetchedEvents);
  }, [fetchedEvents]);

  return (
    <>
      <h1>Events Page</h1>
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
