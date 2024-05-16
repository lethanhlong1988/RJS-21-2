import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

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
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      // try { } catch(error) {}
      const response = await fetch("http://localhost:8080/events");
      if (!response.ok) {
        console.log("Fetch failed!");
        setError("Fetching events failed!");
        return;
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    console.log(fetchedEvents);
  }, [fetchedEvents]);

  return (
    <>
      <div>
        {isLoading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
      </div>
      <ul>
        {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
      </ul>
    </>
  );
}
export default EventsPage;
