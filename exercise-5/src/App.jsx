import {people} from "./data.js";
import Person from "./components/Info.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Students</h1>
      </header>
      <div className="cards-view">
        <div className="cards-grid">
          {people.map((item) => <Person key={item.id} person={item} />)}
        </div>
      </div>
    </>
  );
}

export default App;
