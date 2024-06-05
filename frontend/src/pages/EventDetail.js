import {
  useParams,
  json,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const params = useParams();
  const data = useRouteLoaderData("event-detail");

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

export async function action({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
