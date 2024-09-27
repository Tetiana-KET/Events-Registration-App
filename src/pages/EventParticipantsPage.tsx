import { useEffect, useState } from 'react';
import useExtractEventId from '../hooks/useExtractEventId';
import EventParticipantCard from '../components/EventParticipantCard/EventParticipantCard';
import { UserInterface } from '../models/UserInterface';
import EmptyParticipantList from '../components/EmptyParticipantList/EmptyParticipantList';
import { getEventName } from '../utils/getEventName';
import SearchParticipants from '../components/SearchParticipants/SearchParticipants';
import useFilterRegistrations from '../hooks/useFilterRegistrations';

function EventParticipantsPage() {
  const eventId = useExtractEventId() || '';
  const [registrations, setRegistrations] = useState<UserInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchRegistrations() {
      const response = await fetch(`http://localhost:3000/registrations?eventId=${eventId}`);
      const data = await response.json();
      setRegistrations(data);
    }
participantsToShow;
    fetchRegistrations();
  }, [eventId]);

  const filteredRegistrations = useFilterRegistrations(registrations, searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const participantsToShow = searchQuery ? filteredRegistrations : registrations;

  return (
    <div style={{ alignSelf: 'stretch', flex: '1' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>"{getEventName(eventId)} Event" participants</h1>
      {!registrations.length && <EmptyParticipantList eventId={eventId} />}
      {registrations.length > 0 && (
        <>
          <SearchParticipants onSearch={handleSearch} />
          {participantsToShow.length > 0 ? (
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {participantsToShow.map((user: UserInterface, index: number) => (
                <EventParticipantCard user={user} key={`${user.email}_${index}`} />
              ))}
            </ul>
          ) : (
            <h3 style={{ textAlign: 'center' }}>No participants were found with such name or email.</h3>
          )}
        </>
      )}
    </div>
  );
}
export default EventParticipantsPage;
