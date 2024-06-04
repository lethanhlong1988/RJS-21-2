import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm() {
  const navigate = useNavigate();
  function cancelHandler() {
    // ...
    console.log("Cancel Handler");
    navigate("..");
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input type="url" id="image" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" row="3" required />
      </p>
      <div className={classes.actions}>
        <button onClick={cancelHandler}>Cancel</button>
        <button>Save</button>
      </div>
    </form>
  );
}
export default EventForm;
