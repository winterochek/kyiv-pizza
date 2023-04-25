import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { INSTANCE } from '../../utils/business';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
   'pizza/fetchPizzasStatus',
   async (params) => {
      const { sortBy, order, category } = params;
      const { data } = await axios.get<Pizza[]>(INSTANCE, {
         params: pickBy({ category, sortBy, order }, identity),
      });
      return data;
   }
);
