import { FC, memo } from 'react';
import { CATEGORIES } from '../utils/business';
import { useCategories } from '../utils/hooks';

export const Categories: FC = memo(() => {
   const [categoryId, onChangeCategory] = useCategories();
   return (
      <div className='categories'>
         <ul>
            {CATEGORIES.map((categoryName, i) => (
               <li
                  key={i}
                  onClick={() => onChangeCategory(i)}
                  className={categoryId === i ? 'active' : ''}
               >
                  {categoryName}
               </li>
            ))}
         </ul>
      </div>
   );
});
