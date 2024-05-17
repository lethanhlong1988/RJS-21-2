import classes from "./EventForm.module.css";

function EventForm() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </p>
    </form>
  );
}
export default EventForm;
