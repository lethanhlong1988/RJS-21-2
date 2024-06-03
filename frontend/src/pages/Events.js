import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <h3>Events Page</h3>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //Thong bao loi va su ly ....
  } else {
    return response;
  }
}
