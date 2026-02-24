import './App.css'

const DeleteBtn = ({id, onConfirm}) => {
  return <button onClick={() => {onConfirm(id)}}>Delete</button>
}

function App() {  
  const handleDelete = (id) => {
    alert(`Delete item with id: ${id}`)
  }

  return (
    <div className="App">
      <h1>Delete Item Example</h1>
      <DeleteBtn id={123} onConfirm={handleDelete} />
    </div>
  )
  
}

export default App
