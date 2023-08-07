import './App.css';
import Todoinput from './components/Todoinput/Todoinput';
import Todolist from './components/Todolist/Todolist';

function App() {
  return (
    <div className="main">
      <Todoinput />
      <Todolist />
    </div>
  );
}

export default App;
