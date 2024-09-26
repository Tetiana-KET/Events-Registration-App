import { mockEvents } from '../../mockData/mockEvents';
import styles from './EventsList.module.css';
import EventCard from '../EventCard/EventCard';

function EventsList(): JSX.Element {
  return (
    <section className={styles.eventsContainer}>
      {!mockEvents.length && <h2>No Upcoming Events</h2>}
      {mockEvents.length && (
        <>
          <h1 className={styles.eventsSectionTitle}>Upcoming Events</h1>
          <ul className={styles.eventsList}>
            {mockEvents.map((event, index) => (
              <EventCard event={event} id={index} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
export default EventsList;
