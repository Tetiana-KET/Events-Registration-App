import { useState } from 'react';
import styles from './SortingComponent.module.css';

interface SortingComponentProps {
  setSortCriteria: (criteria: string) => void;
}

function SortingComponent({ setSortCriteria }: SortingComponentProps) {
  const [innerSortCriteria, setInnerSortCriteria] = useState('title');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCriteria = e.target.value;
    setInnerSortCriteria(selectedCriteria);
    setSortCriteria(selectedCriteria);
  };

  return (
    <div className={styles.sortingComponentWrap}>
      <label htmlFor="sortCriteria" className={styles.sortingComponentLabel}>
        Sort by:{' '}
      </label>
      <select
        id="sortCriteria"
        value={innerSortCriteria}
        onChange={handleChange}
        className={styles.sortingComponentSelect}
      >
        <option value="title">Title</option>
        <option value="date">Event Date</option>
        <option value="organizer">Organizer</option>
      </select>
    </div>
  );
}

export default SortingComponent;
