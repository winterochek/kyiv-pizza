import React from 'react';
import ReactPaginate from 'react-paginate';
import { usePagination } from '../../utils/hooks';
import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
   const [currentPage, onChangePage] = usePagination();
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={(event) => onChangePage(event.selected + 1)}
         pageRangeDisplayed={4}
         pageCount={3}
         forcePage={currentPage - 1}
      />
   );
};
