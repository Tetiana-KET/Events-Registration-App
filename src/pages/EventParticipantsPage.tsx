import { useEffect, useState } from 'react';
import useExtractEventId from '../hooks/useExtractEventId';
import EventParticipantCard from '../components/EventParticipantCard/EventParticipantCard';
import { UserInterface } from '../models/UserInterface';
import { Link } from 'react-router-dom';

function EventParticipantsPage() {
  const eventId = useExtractEventId() || '';
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function fetchRegistrations() {
      const response = await fetch(`http://localhost:3000/registrations?eventId=${eventId}`);
      const data = await response.json();
      setRegistrations(data);
    }

    fetchRegistrations();
  }, [eventId]);

  return (
    <div style={{ alignSelf: 'stretch', flex: '1' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        "{eventId.split('_').slice(0, -1).join(' ')} Event" participants
      </h1>
      {!registrations.length && (
        <>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>No one has registered for this event yet.</h3>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            Be the first to join the{' '}
            <span style={{ fontWeight: 'bold' }}>"{eventId.split('_').slice(0, -1).join(' ')}"</span>!
          </p>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            Don’t miss the chance to be part of this exciting event!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={`/register?eventId=${eventId}`} className="button">
              Register for {eventId.split('_').slice(0, -1).join(' ')} Event
            </Link>
          </div>
        </>
      )}
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {registrations.map((user: UserInterface, index: number) => (
          <EventParticipantCard user={user} key={`${user.email}_${index}`} />
        ))}
      </ul>
    </div>
  );
}
export default EventParticipantsPage;
