import { Form, useNavigate, useNavigation } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    console.log("cancel!!!");
    navigate("..");
  }
  return (
    <Form method="post" className={classes.form}>
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
