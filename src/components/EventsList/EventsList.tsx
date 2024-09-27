import styles from './EventsList.module.css';
import EventCard from '../EventCard/EventCard';
import { PER_PAGE } from '../../consts/perPage';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import { EventInterface } from '../../models/EventInterface';

function EventsList(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(events.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedEvents = events.slice(startIndex, startIndex + PER_PAGE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3000/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data: EventInterface[] = await response.json();
      setEvents(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={styles.eventsContainer}>
      {!events.length && <h2>No Upcoming Events</h2>}
      {events.length && (
        <>
          <h1 className={styles.eventsSectionTitle}>Upcoming Events</h1>
          <ul className={styles.eventsList}>
            {selectedEvents.map((event, index) => (
              <EventCard
                event={event}
                key={`${event.title}_${index}`}
                eventId={`${event.title.split(' ').join('_')}_${index}`}
              />
            ))}
          </ul>
          <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
      )}
    </section>
  );
}
export default EventsList;
