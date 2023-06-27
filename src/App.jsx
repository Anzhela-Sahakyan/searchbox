import actors from "./data/actors.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, actor) => {
    if (!query) {
      return actors;
    }
    return actors.filter((actor) =>
      actor.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems(query, actors);
  return (
    <div className="App">
      <h1 className="header">Famous Actors</h1>
      <label className="label">Search</label>
      <input
        className="input-box"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {filteredItems.map((actor) => (
          <h2 className="names">{actor}</h2>
        ))}
      </ul>
    </div>
  );
}

export default App;
