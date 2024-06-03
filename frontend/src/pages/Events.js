import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   // Thong bao va su ly loi
  //   return <p>{data.massage}</p>;
  // }

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
  const response = await fetch("http://localhost:8080/eventss");
  if (!response.ok) {
    //Thong bao loi va su ly ....
    // return { isError: true, massage: "Could not fetch events" };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    return response;
  }
}
