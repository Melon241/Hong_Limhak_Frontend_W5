import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSeatch] = useState("");
  const items = ["React", "JavaScript", "Tailwind"];

  const filterItems = () => {
    return items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div className="App">
      <h1>Search Items</h1>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSeatch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filterItems().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
