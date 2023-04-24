import { useState, useEffect } from 'react';
import { Pizza } from '../../redux/pizza/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { INSTANCE } from '../business';
import useIsMounted from './useIsMounted';

const useFetchSinglePizza = (id: string | undefined): [Pizza | null] => {
   const [pizza, setPizza] = useState<Pizza | null>(null);
   const navigate = useNavigate();
   const isMounted = useIsMounted();
   useEffect(() => {
      const getSinglePizza = async () => {
         try {
            const { data } = await axios.get(INSTANCE + '/' + id);
            setPizza(data as Pizza);
         } catch (err) {
            alert('Помилка при завантаженні піци');
            navigate('/');
         }
      };
      if (!isMounted()) return;
      getSinglePizza();
   }, [id, navigate, isMounted]);

   return [pizza];
};

export default useFetchSinglePizza;
