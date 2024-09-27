import styles from './PaginationComponent.module.css';
import { Pagination } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function PaginationComponent({ currentPage, totalPages, onPageChange }: PaginationProps): JSX.Element {
  return (
    <div className={styles.paginationWrap}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        color="primary"
        boundaryCount={1}
        siblingCount={1}
      />
    </div>
  );
}

export default PaginationComponent;
