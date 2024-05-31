import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      const response = await fetch("http://localhost:8080/events");
      if (!response.ok) {
        //Thong bao loi va su ly ....
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  return (
    <>
      <h3>Events Page</h3>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && (
        <div>
          <EventsList events={fetchedEvents} />
        </div>
      )}
    </>
  );
}

export default EventsPage;
