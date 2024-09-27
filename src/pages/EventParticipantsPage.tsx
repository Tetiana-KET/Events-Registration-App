import { useEffect, useState } from 'react';
import useExtractEventId from '../hooks/useExtractEventId';
import EventParticipantCard from '../components/EventParticipantCard/EventParticipantCard';
import { UserInterface } from '../models/UserInterface';
import EmptyParticipantList from '../components/EmptyParticipantList/EmptyParticipantList';
import { getEventName } from '../utils/getEventName';

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
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>"{getEventName(eventId)} Event" participants</h1>
      {!registrations.length && <EmptyParticipantList eventId={eventId} />}
      {registrations.length > 0 && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {registrations.map((user: UserInterface, index: number) => (
            <EventParticipantCard user={user} key={`${user.email}_${index}`} />
          ))}
        </ul>
      )}
    </div>
  );
}
export default EventParticipantsPage;
