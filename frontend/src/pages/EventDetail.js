import { useParams } from "react-router-dom";
function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <div>Event Detail Page</div>
      <p>Event ID: {params.eventId}</p>
    </div>
  );
}
export default EventDetailPage;
