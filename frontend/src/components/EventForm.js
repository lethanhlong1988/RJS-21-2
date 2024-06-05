import { useNavigate, Form } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    // ...
    console.log("Cancel Handler");
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
          defaultValue={event ? event.title : "Test Event"}
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
          defaultValue={event ? event.description : "Review Event!!!"}
        />
      </p>
      <div className={classes.actions}>
        <button onClick={cancelHandler}>Cancel</button>
        <button typy="submit">Save</button>
      </div>
    </Form>
  );
}
export default EventForm;
