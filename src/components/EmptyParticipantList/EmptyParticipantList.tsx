import { Link } from 'react-router-dom';
import { getEventName } from '../../utils/getEventName';

interface EmptyParticipantListProps {
  eventId: string;
}

function EmptyParticipantList({ eventId }: EmptyParticipantListProps) {
  return (
    <>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>No one has registered for this event yet.</h3>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Be the first to join the <span style={{ fontWeight: 'bold' }}>"{getEventName(eventId)}"</span>!
      </p>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Don’t miss the chance to be part of this exciting event!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={`/register?eventId=${eventId}`} className="button">
          Register for {getEventName(eventId)} Event
        </Link>
      </div>
    </>
  );
}
export default EmptyParticipantList;
