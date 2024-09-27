import { Link } from 'react-router-dom';
import { EventInterface } from '../../models/EventInterface';
import styles from './EventCard.module.css';

interface Props {
  event: EventInterface;
  eventId: string;
}

function EventCard(props: Props): JSX.Element {
  const { title, description, eventDate, organizer } = props.event;
  const id = props.eventId;
  return (
    <li className={styles.eventCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Date: {eventDate}</p>
      <p>Organizer: {organizer}</p>

      <div className={styles.eventLinksWrap}>
        <Link to={`/register?eventId=${id}`} className={styles.EventCardLink}>
          Register
        </Link>
        <Link to={`/view?eventId=${id}`} className={styles.EventCardLink}>
          View
        </Link>
      </div>
    </li>
  );
}
export default EventCard;
