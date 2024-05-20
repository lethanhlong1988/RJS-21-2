import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}
export default NewEventPage;

export async function action({ request }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(eventData);
  console.log("Chuan bi create New Event!!!");
  return redirect("/events");
}
