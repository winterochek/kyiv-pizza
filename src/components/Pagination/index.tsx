import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useCountPages, usePagination } from '../../utils/hooks';
import styles from './Pagination.module.scss';

export const Pagination: FC = () => {
   const [currentPage, onChangePage] = usePagination();
   const [pageCount] = useCountPages();

   if (!pageCount || pageCount === 1) return <div />;
   
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={(event) => onChangePage(event.selected + 1)}
         pageRangeDisplayed={3}
         pageCount={pageCount}
         forcePage={currentPage - 1}
      />
   );
};
