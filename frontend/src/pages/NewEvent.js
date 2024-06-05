import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <div>
      <EventForm />
    </div>
  );
}
export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(eventData);

  // fetch("http://localhost:8080/events", {
  //   method: "POST",
  // });
}
