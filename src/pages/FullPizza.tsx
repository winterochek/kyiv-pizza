import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetchSinglePizza from '../utils/hooks/useFetchSinglePizza';
import { useSelector } from 'react-redux';
import { selectCartItemById } from '../redux/cart/selectors';
import { CartItem } from '../redux/cart/types';
import { TYPES } from '../utils/business';
import { useAppDispatch } from '../redux/store';
import { addItem } from '../redux/cart/slice';

const FullPizza: FC = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const [activeType, setActiveType] = useState(0);
   const [activeSize, setActiveSize] = useState(0);
   const cartItem = useSelector(selectCartItemById(String(id)));
   const [pizza] = useFetchSinglePizza(id);
   const onClickAdd = () => {
      if (pizza) {
         const cartItem: CartItem = {
            id: pizza.id,
            title: pizza.title,
            price: pizza.price,
            imageUrl: pizza.imageUrl,
            type: TYPES[activeType],
            size: pizza.sizes[activeSize],
            count: 0,
         };

         dispatch(addItem(cartItem));
      }
   };

   if (!pizza) {
      return (
         <div className='container'>
            <h2>Загрузка...</h2>
         </div>
      );
   }

   const addedCount = cartItem ? cartItem.count : 0;

   return (
      <div className='container'>
         <div className='fullPizzaContainer'>
            <div className='fullPizza__top'>
               <img src={pizza.imageUrl} />
               <div className='fullPizza__info'>
                  <h2>{pizza.title}</h2>
                  <h4>{pizza.price} ₴</h4>
                  <div className='pizza-block__selector'>
                     <ul>
                        {pizza.types.map((typeId) => (
                           <li
                              key={typeId}
                              onClick={() => setActiveType(typeId)}
                              className={activeType === typeId ? 'active' : ''}
                           >
                              {TYPES[typeId]}
                           </li>
                        ))}
                     </ul>
                     <ul>
                        {pizza.sizes.map((size, i) => (
                           <li
                              key={size}
                              onClick={() => setActiveSize(i)}
                              className={activeSize === i ? 'active' : ''}
                           >
                              {size} см.
                           </li>
                        ))}
                     </ul>
                  </div>
                  <button
                     onClick={onClickAdd}
                     className='button button--outline button--add'
                  >
                     <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                           fill='white'
                        />
                     </svg>
                     <span>Додати</span>
                     {addedCount > 0 && <i>{addedCount}</i>}
                  </button>
               </div>
            </div>
            <div className='fullPizza__bottom'>
               <Link to='/'>
                  <button className='button button--outline button--add'>
                     <span>Назад</span>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FullPizza;
