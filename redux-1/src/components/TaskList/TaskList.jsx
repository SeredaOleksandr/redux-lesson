import { Task } from '../Task/Task';
import css from './TaskList.module.css';

// Імпортуємо хук
import { useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';
import { getStatusFilter, getTasks } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);

  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(state => state.filters.status);
  // Цих 2 перенесли до src/redux/selectors.js

  // const tasks = useSelector(getTasks);
  // const statusFilter = useSelector(getStatusFilter);

  // Обчислюємо масив завдань,
  // які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
