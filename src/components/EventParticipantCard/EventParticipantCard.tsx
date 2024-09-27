import styles from './EventParticipantCard.module.css';
import UserInterface from '../../models/UserInterface';

interface Props {
  user: UserInterface;
}

function EventParticipantCard(props: Props): JSX.Element {
  const { name, email } = props.user;
  return (
    <li className={styles.eventParticipantCard}>
      <h3 className={styles.eventParticipantName}>{name}</h3>
      <p className={styles.eventParticipantEmail}>{email}</p>
    </li>
  );
}
export default EventParticipantCard;
