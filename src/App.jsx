import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/operations';
import { getTasks } from './redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(getTasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Рендерим розмітку в залежності від значень у стані
  return (
    <div>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
