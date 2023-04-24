import React from 'react';
import ReactPaginate from 'react-paginate';
import { usePagination } from '../../utils/hooks';
import styles from './Pagination.module.scss';
// import { LIMIT_OF_ITEMS_PER_PAGE } from '../../utils/business';

export const Pagination: React.FC = () => {
   const [currentPage, onChangePage] = usePagination();
   // const { items } = useSelector(selectPizzaData);

   // if (items.length < LIMIT_OF_ITEMS_PER_PAGE) return <div />;
   
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={(event) => onChangePage(event.selected + 1)}
         pageRangeDisplayed={3}
         pageCount={3}
         forcePage={currentPage - 1}
      />
   );
};
