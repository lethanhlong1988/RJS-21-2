import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    console.log("cancel!!!");
    navigate("..");
  }
  return (
    <Form method="post" className={classes.form}>
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
          defaultValue={event ? event.title : "New Title"}
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
              : "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg"
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
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Desscription</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : "description 123"}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
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
    date: data.get("data"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";

  if (method === "PATH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    heades: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect("/events");
}
