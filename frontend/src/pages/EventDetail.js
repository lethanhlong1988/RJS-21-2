import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <div>Event Detail Page</div>
      <p>Event ID: {params.eventId}</p>
      <EventItem />
    </div>
  );
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    // Thong bao va su ly loi
  } else {
    return response;
  }
}
