import { FC } from 'react';
import { useSelector } from 'react-redux';

import {
   Categories,
   Sort,
   PizzaBlock,
   Skeleton,
   Pagination,
   ErrorFetching,
} from '../components';

import { selectPizzaData } from '../redux/pizza/selectors';
import { useFetchPizzas } from '../utils/hooks';

const Home: FC = () => {
   const { items, status } = useSelector(selectPizzaData);

   useFetchPizzas();

   const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
   const skeletons = [...new Array(6)].map((_, index) => (
      <Skeleton key={index} />
   ));

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
               {status === 'loading' ? skeletons : pizzas}
            </div>
         )}

         <Pagination />
      </div>
   );
};

export default Home;