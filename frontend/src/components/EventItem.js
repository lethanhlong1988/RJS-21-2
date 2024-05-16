import classes from "./EventItem.module.css";

function EventItem({ event }) {
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button>Delete</button>
      </menu>
    </article>
  );
}
export default EventItem;
