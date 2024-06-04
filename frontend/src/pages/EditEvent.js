import EventForm from "../components/EventForm";

import { useRouteLoaderData } from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <div>
      <EventForm />
    </div>
  );
}
export default EditEventPage;
