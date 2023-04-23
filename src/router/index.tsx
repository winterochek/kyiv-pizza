import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import  FullPizza  from '../pages/FullPizza';
import  NotFound  from '../pages/NotFound';

export const Router: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route
               path='cart'
               element={
                  <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                     <Cart />
                  </Suspense>
               }
            />
            <Route
               path='pizza/:id'
               element={
                  <Suspense fallback={<div>Идёт загрузка...</div>}>
                     <FullPizza />
                  </Suspense>
               }
            />
            <Route
               path='*'
               element={
                  <Suspense fallback={<div>Идёт загрузка...</div>}>
                     <NotFound />
                  </Suspense>
               }
            />
         </Route>
      </Routes>
   );
};
