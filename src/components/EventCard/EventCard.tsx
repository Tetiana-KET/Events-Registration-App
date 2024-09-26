import { Link } from 'react-router-dom';
import { EventInterface } from '../../models/EventInterface';
import styles from './EventCard.module.css';

interface Props {
  event: EventInterface;
}

function EventCard(props: Props): JSX.Element {
  const { title, description, eventDate, organizer } = props.event;
  return (
    <li className={styles.eventCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Date: {eventDate}</p>
      <p>Organizer: {organizer}</p>

      <div className={styles.eventLinksWrap}>
        <Link to={`/register`} className={styles.EventCardLink}>
          Register
        </Link>
        <Link to={`/view`} className={styles.EventCardLink}>
          View
        </Link>
      </div>
    </li>
  );
}
export default EventCard;
