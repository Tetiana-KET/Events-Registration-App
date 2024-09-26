import { Link } from 'react-router-dom';
import { EventType } from '../../models/EventType';
import styles from './EventCard.module.css';

interface Props {
  event: EventType;
  id: number;
}

function EventCard(props: Props): JSX.Element {
  const { title, description, eventDate, organizer } = props.event;
  return (
    <li className={styles.eventCard} key={`${title}_${props.id}`}>
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
