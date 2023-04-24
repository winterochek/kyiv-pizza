import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFetchSinglePizza } from '../utils/hooks';

const FullPizza: FC = () => {
   const { id } = useParams();
   const [pizza] = useFetchSinglePizza(id);

   if (!pizza) {
      return <>Загрузка...</>;
   }

   return (
      <div className='container'>
         <img src={pizza.imageUrl} />
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
         <Link to='/'>
            <button className='button button--outline button--add'>
               <span>Назад</span>
            </button>
         </Link>
      </div>
   );
};

export default FullPizza;
