import { FC, memo } from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = memo(() => {
   return (
      <div className={styles.root}>
         <h1>
            <span>😕</span>
            <br />
            Нічого не знайдено
         </h1>
         <p className={styles.description}>На жаль, такої сторінки не існує</p>
      </div>
   );
});
