import { useEffect } from 'react';
import { useCategories, useSort } from '.';
import { useAppDispatch } from '../../redux/store';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import useIsMounted from './useIsMounted';

const useFetchPizzas = () => {
   const dispatch = useAppDispatch();
   const [sort] = useSort();
   const [categoryId] = useCategories();
   const isMounted = useIsMounted();
   useEffect(() => {
      const getPizzas = async () => {
         const sortBy = sort.sortProperty.replace('-', '');
         const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
         const category = categoryId > 0 ? String(categoryId) : '';

         await dispatch(
            fetchPizzas({
               sortBy,
               order,
               category,
            })
         );
      };
      if (!isMounted()) return;
      getPizzas();
   }, [categoryId, dispatch, sort.sortProperty, isMounted]);
};

export default useFetchPizzas;
