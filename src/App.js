import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

const handleInputChange = (e) => {
  setInput(e.target.value);
};

const handleAdd = () => {
  setTodo((prevState) => {
    return [input, ...prevState];
  });
}

todo.onclick = function(event){
  console.log(event);
}

function onClickEvent(event){
  console.log(event.target);
}

  return (
    <div>
      <div className='title'>To-do List</div>

      <div className='add'><input type="text" value={input} onChange={handleInputChange}></input></div>
      <button onClick={handleAdd}>Add</button>

      {todo.map((todo, idx) => {
        return <p key={idx}>{todo}</p>;
      })}

    </div>
  );
}



export default App;
