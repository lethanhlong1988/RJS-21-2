import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const params = useParams();
  const data = useLoaderData();
  console.log(data.event);

  return (
    <div>
      <div>Event Detail Page</div>
      <p>Event ID: {params.eventId}</p>
      <EventItem event={data.event} />
    </div>
  );
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    // Thong bao va su ly loi
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 },
    );
  } else {
    return response;
  }
}
