import { useState } from 'react';
import { deletetodo } from '../../redux/reducers/todoSlice';
import { useDispatch } from 'react-redux';
import './Todo.css';

const Todo = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const complete = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div className="Todo_container">
      <div className={isComplete ? 'complete' : 'non-complete'}>{todo}</div>
      <button onClick={complete}>완료</button>
      <button onClick={() => dispatch(deletetodo(todo))}>삭제</button>
    </div>
  );
};

export default Todo;
