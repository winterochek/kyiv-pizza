import { useSelector } from 'react-redux';
import {
   CategoriesReturnType,
   PaginationReturnType,
   QueryReturnType,
   SortItem,
   SortReturnType,
} from './types';
import { useAppDispatch } from '../../redux/store';
import {
   setCategoryId,
   setCurrentPage,
   setSearchValue,
   setSort,
} from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import { LIMIT_OF_ITEMS_PER_PAGE } from '../business';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { useMemo } from 'react';
import useMediaQuery from './useMediaQuery';

export const useIndexes = (currentPage: number) => {
   const limit = useLimit();

   const startIndex = (currentPage - 1) * limit;
   const endIndex = startIndex + limit;
   return [startIndex, endIndex];
};

export const useCountPages = () => {
   const { count } = useSelector(selectPizzaData);
   const limit = useLimit();
   const pageCount = useMemo(() => {
      return count && Math.ceil(count / limit);
   }, [count, limit]);
   return [pageCount];
};

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

export const useLimit = () => {
   const mobile = useMediaQuery('(max-width: 600px)');
   return !mobile ? LIMIT_OF_ITEMS_PER_PAGE : LIMIT_OF_ITEMS_PER_PAGE / 2;
};
