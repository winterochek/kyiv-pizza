import { FC } from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: FC = () => (
   <div className='cart cart--empty'>
      <h2>
         У вашому кошику порожньо <span>😕</span>
      </h2>
      <p>
         Імовірно, ви ще не обрали піцу.
         <br />
         Для того, щоб замовити піцу, перейдіть на главну сторінку.
      </p>
      <img src={cartEmptyImg} alt='Empty cart' />
      <Link to='/' className='button button--black'>
         <span>Повернутися назад</span>
      </Link>
   </div>
);
