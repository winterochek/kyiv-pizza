import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { INSTANCE, LIMIT_OF_ITEMS_PER_PAGE } from '../../utils/business';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
   'pizza/fetchPizzasStatus',
   async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(INSTANCE, {
         params: pickBy(
            {
               page: currentPage,
               limit: LIMIT_OF_ITEMS_PER_PAGE,
               category,
               sortBy,
               order,
               search,
            },
            identity
         ),
      });
      return data;
   }
);
