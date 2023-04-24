import { SortPropertyEnum } from '../../redux/filter/types';
import { Pizza } from '../../redux/pizza/types';

export type PaginationReturnType = [number, (page: number) => void];

export type CategoriesReturnType = [number, (idx: number) => void];

export type QueryReturnType = [string, (str: string) => void, () => void];

export type SortItem = {
   name: string;
   sortProperty: SortPropertyEnum;
};

export type SortReturnType = [SortItem, (obj: SortItem) => void];

export type UseItemsReturnType = [Pizza[],string]