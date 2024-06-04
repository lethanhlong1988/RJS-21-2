import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <div>
      <EventForm />
    </div>
  );
}
export default NewEventPage;

export function action({ request, params }) {
  console.log("action");
  // const data = request.formData();

  // fetch("http://localhost:8080/events", {
  //   method: "POST",
  // });
}
