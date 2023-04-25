import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { useIndexes, usePagination, useSearchQuery } from '.';
import { UseItemsReturnType } from './types';

const useItems = (): UseItemsReturnType => {
   const { items, status } = useSelector(selectPizzaData);
   const [currentPage] = usePagination();
   const [query] = useSearchQuery();
   const [startIndex, endIndex] = useIndexes(currentPage);

   const displayItems = useMemo(
      () =>
         items
            .filter((item) => {
               if (query === '' || query === ' ') return item;
               return item.title
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase());
            })
            .slice(startIndex, endIndex),
      [items, query, startIndex, endIndex]
   );

   return [displayItems, status];
};

export default useItems;
