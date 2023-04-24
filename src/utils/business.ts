import { SortPropertyEnum } from '../redux/filter/types';

export const INSTANCE = 'https://64445d1e914c816083b8d84e.mockapi.io/items'

export const CATEGORIES = [
   'Усі',
   'Мʼясні',
   'Вегетаріанські',
   'Гострі',
   'Не гострі',
];

export const SORTLIST: Array<{
   name: string;
   sortProperty: SortPropertyEnum;
}> = [
   { name: 'популярністю (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
   { name: 'популярністю (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
   { name: 'ціною (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
   { name: 'ціною (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
   { name: 'алфавітом (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
   { name: 'алфавітом (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const TYPES: Array<string> = ['тонке', 'товсте'];

export const LIMIT_OF_ITEMS_PER_PAGE = 8;
