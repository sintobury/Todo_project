import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/reducers/todoSlice';
import './Todoinput.css';

const Todoinput = () => {
  const [inputVal, setinputVal] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    if (inputVal !== '') {
      dispatch(add(inputVal));
      setinputVal('');
    }
  };

  return (
    <div className="Todoinput_container">
      <span>Todo</span>
      <input
        placeholder="Todo"
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
      ></input>
      <div>
        <button onClick={addTodo}>추가</button>
      </div>
    </div>
  );
};
export default Todoinput;
