import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(isSubmitting);

  function cancelHandler() {
    // ...
    console.log("Cancel Handler");
    navigate("..");
  }
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={event ? event.title : "Test Event-01"}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          name="image"
          required
          defaultValue={
            event
              ? event.image
              : "https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg"
          }
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          defaultValue={event ? event.date : "2025-09-10"}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          row="3"
          required
          defaultValue={event ? event.description : "Review Event!!! Test-01"}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}
export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.state === 422) {
    return response;
  }

  if (!response.ok) {
    // Su ly loi...
    throw json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect("/events");
}
