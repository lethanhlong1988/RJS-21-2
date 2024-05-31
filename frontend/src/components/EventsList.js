import classes from "./EventsList.module.css";

function EventsList({ events }) {
  console.log(events);
  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <div>Event</div>
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EventsList;
