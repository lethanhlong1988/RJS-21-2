import classes from "./EventForm.module.css";

function EventForm({ event }) {
  function cancelHandler() {
    console.log("cancel!!!");
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={event ? event.title : "title"}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          name="image"
          required
          defaultValue={event ? event.image : "url"}
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
          defaultValue={event ? event.description : "description"}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}
export default EventForm;
