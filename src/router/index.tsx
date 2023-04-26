import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import FullPizza from '../pages/FullPizza';
import NotFound from '../pages/NotFound';

const Router: FC = () => (
   <Routes>
      <Route path='/' element={<MainLayout />}>
         <Route path='' element={<Home />} />
         <Route
            path='cart'
            element={
               <Suspense fallback={<div>Очікуйте...</div>}>
                  <Cart />
               </Suspense>
            }
         />
         <Route
            path='pizza/:id'
            element={
               <Suspense fallback={<div>Очікуйте...</div>}>
                  <FullPizza />
               </Suspense>
            }
         />
         <Route
            path='*'
            element={
               <Suspense fallback={<div>Очікуйте...</div>}>
                  <NotFound />
               </Suspense>
            }
         />
      </Route>
   </Routes>
);

export default Router;
