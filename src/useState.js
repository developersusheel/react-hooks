import './index.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () =>{
    if(count<=0) return null;
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="App">
      <button onClick={increment}> + </button>
      <span>{count}</span>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;
