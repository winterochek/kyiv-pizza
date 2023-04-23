import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import {
   setCategoryId,
   setCurrentPage,
   setSearchValue,
   setSort,
} from '../redux/filter/slice';
import { SortPropertyEnum } from '../redux/filter/types';
import { useEffect, useState } from 'react';
import { fetchPizzas } from '../redux/pizza/asyncActions';

type PaginationReturnType = [number, (page: number) => void];

type CategoriesReturnType = [number, (idx: number) => void];

type QueryReturnType = [string, (str: string) => void, () => void];

type SortItem = {
   name: string;
   sortProperty: SortPropertyEnum;
};

type SortReturnType = [SortItem, (obj: SortItem) => void];

export const usePagination = (): PaginationReturnType => {
   const dispatch = useAppDispatch();
   const { currentPage } = useSelector(selectFilter);
   const onChangePage = (page: number) => {
      dispatch(setCurrentPage(page));
   };
   return [currentPage, onChangePage];
};

export const useCategories = (): CategoriesReturnType => {
   const dispatch = useAppDispatch();
   const { categoryId } = useSelector(selectFilter);
   const onChangeCategory = (idx: number) => {
      dispatch(setCategoryId(idx));
   };
   return [categoryId, onChangeCategory];
};

export const useSearchQuery = (): QueryReturnType => {
   const dispatch = useAppDispatch();
   const { searchValue } = useSelector(selectFilter);
   const onChangeValue = (str: string) => {
      dispatch(setSearchValue(str));
   };
   const clearValue = () => dispatch(setSearchValue(''));
   return [searchValue, onChangeValue, clearValue];
};

export const useSort = (): SortReturnType => {
   const dispatch = useAppDispatch();
   const { sort } = useSelector(selectFilter);
   const changeSort = (obj: SortItem) => {
      dispatch(setSort(obj));
   };
   return [sort, changeSort];
};

export const useFetchPizzas = () => {
   const dispatch = useAppDispatch();
   const [sort] = useSort();
   const [categoryId] = useCategories();
   const [query] = useSearchQuery();
   const [currentPage] = usePagination();
   useEffect(() => {
      const getPizzas = async () => {
         const sortBy = sort.sortProperty.replace('-', '');
         const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
         const category = categoryId > 0 ? String(categoryId) : '';
         const search = query;

         await dispatch(
            fetchPizzas({
               sortBy,
               order,
               category,
               search,
               currentPage: String(currentPage),
            })
         );

         window.scrollTo(0, 0);
      };

      getPizzas();
   }, [categoryId, currentPage, dispatch, query, sort.sortProperty]);
};

// export const useBooleanState = (initial = false) => {
//    const [value, setValue] = useState<boolean>(initial);
//    const changeValue = setValue((value) => !value);
//    const changeOnTrue = setValue((value) => true);
//    const changeOnFalse = setValue((value) => false);
//    return [value, changeValue, changeOnTrue, changeOnFalse];
// };
