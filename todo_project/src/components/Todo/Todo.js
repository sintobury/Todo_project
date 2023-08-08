import { useState } from 'react';
import { deletetodo, update } from '../../redux/reducers/todoSlice';
import { useDispatch } from 'react-redux';
import './Todo.css';

const Todo = ({ todo, idx }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [content, setContent] = useState(todo);
  const [updateMode, setUpdateMode] = useState(false);
  const dispatch = useDispatch();

  const complete = () => {
    setIsComplete(!isComplete);
  };
  const modify = () => {
    if (updateMode) {
      dispatch(update({ idx, content }));
    }
    setUpdateMode(!updateMode);
  };

  return (
    <div className="Todo_container">
      {updateMode ? (
        <input
          placeholder="Todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
      ) : (
        <div className={isComplete ? 'complete' : 'non-complete'}>{todo}</div>
      )}
      <button onClick={complete}>완료</button>
      <button onClick={() => dispatch(deletetodo(todo))}>삭제</button>
      <button onClick={modify}>수정</button>
    </div>
  );
};

export default Todo;
