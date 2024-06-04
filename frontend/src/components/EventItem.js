import classes from "./EventItem.module.css";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
    console.log("start Delete!!!");
  }
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
export default EventItem;
