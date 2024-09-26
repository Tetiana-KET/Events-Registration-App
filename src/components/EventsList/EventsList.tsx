import { mockEvents } from '../../mockData/mockEvents';
import styles from './EventsList.module.css';
import EventCard from '../EventCard/EventCard';
import { PER_PAGE } from '../../consts/perPage';
import { useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';

function EventsList(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockEvents.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedEvents = mockEvents.slice(startIndex, startIndex + PER_PAGE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.eventsContainer}>
      {!mockEvents.length && <h2>No Upcoming Events</h2>}
      {mockEvents.length && (
        <>
          <h1 className={styles.eventsSectionTitle}>Upcoming Events</h1>
          <ul className={styles.eventsList}>
            {selectedEvents.map((event, index) => (
              <EventCard event={event} key={`${event.title}_${index}`} />
            ))}
          </ul>
          <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
      )}
    </section>
  );
}
export default EventsList;
