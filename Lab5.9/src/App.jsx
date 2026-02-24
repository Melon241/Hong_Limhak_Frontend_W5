import { useState } from 'react'
import './App.css'



function App() {
  const [list, setList] = useState([{ id:1 }, { id:2 }, { id : 3 }]);
  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  }
  return (
    <div className='App'>
      <h1>My items</h1>
      <ul>
        {
          list.map(item => (<li key={item.id}>{item.id} <button onClick = {() => removeItem(item.id)}>Delete</button></li>))
        }
      </ul>
    </div>
  )
/*jhdfjhdjfh*/
  
}

export default App
