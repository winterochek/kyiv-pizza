import { FC } from 'react';

import {
   Categories,
   Sort,
   PizzaBlock,
   Skeleton,
   Pagination,
   ErrorFetching,
} from '../components';
import useFetchPizzas from '../utils/hooks/useFetchPizzas';
import useItems from '../utils/hooks/useItems';

const Home: FC = () => {
   const [displayItems, status] = useItems();

   useFetchPizzas();

   return (
      <div className='container'>
         <div className='content__top'>
            <Categories />
            <Sort />
         </div>
         <h2 className='content__title'>Усі піци</h2>
         {status === 'error' ? (
            <ErrorFetching />
         ) : (
            <div className='content__items'>
               {status === 'loading' ? (
                  [...new Array(6)].map((_, index) => <Skeleton key={index} />)
               ) : displayItems.length ? (
                  displayItems.map((obj) => (
                     <PizzaBlock key={obj.id} {...obj} />
                  ))
               ) : (
                  <h2 style={{ marginBottom: '2.5rem' }}>
                     Піци не знайдені 😕
                  </h2>
               )}
            </div>
         )}

         <Pagination />
      </div>
   );
};

export default Home;
