import { memo } from 'react';

export const ErrorFetching = memo(() => (
   <div className='content__error-info'>
      <h2>Трапилась помилка... 😕</h2>
      <p>На жаль, не вдалося отримати піци. Спробуйте пізніше.</p>
   </div>
));
