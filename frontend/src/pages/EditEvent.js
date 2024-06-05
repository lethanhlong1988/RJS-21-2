import EventForm from "../components/EventForm";

import { useRouteLoaderData } from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <div>
      <EventForm method="patch" event={data.event} />
    </div>
  );
}
export default EditEventPage;
