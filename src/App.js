import './index.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
    <div className="App">
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>comments</button>
      <pre>{items.map(item =>{
        return <div>{JSON.stringify(item)}</div>
      })}</pre>
    </div>
    </>
  );
}

export default App;
