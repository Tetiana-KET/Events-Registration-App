import { useState, useEffect } from 'react';
import { EventInterface } from '../models/EventInterface';

export default function useSortedEvents(events: EventInterface[], sortCriteria: string) {
  const [sortedEvents, setSortedEvents] = useState<EventInterface[]>(events);

  useEffect(() => {
    const sortEvents = (criteria: string) => {
      const sorted = [...events].sort((a, b) => {
        if (criteria === 'title') {
          return a.title.localeCompare(b.title);
        } else if (criteria === 'date') {
          return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
        } else if (criteria === 'organizer') {
          return a.organizer.localeCompare(b.organizer);
        }
        return 0;
      });
      setSortedEvents(sorted);
    };

    sortEvents(sortCriteria);
  }, [events, sortCriteria]);

  return sortedEvents;
}
