import { useState } from 'react';
import styles from './SearchParticipants.module.css';
import SearchIcon from '@mui/icons-material/Search';

interface SearchParticipantsProps {
  onSearch: (query: string) => void;
}

function SearchParticipants({ onSearch }: SearchParticipantsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.searchParticipantsWrapper}>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.searchParticipantsInput}
      />
      <SearchIcon className={styles.searchParticipantsSearchIcon} />
    </div>
  );
}

export default SearchParticipants;
