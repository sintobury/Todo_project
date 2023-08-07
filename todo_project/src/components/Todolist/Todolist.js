import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import './Todolist.css';

const Todolist = () => {
  const Todos = useSelector((state) => state.Todos.todos);
  console.log(Todos);
  return (
    <div className="Todolist_container">
      {Todos.map((el, idx) => (
        <Todo todo={el} key={idx} />
      ))}
    </div>
  );
};

export default Todolist;
