import React from "react";
import EventList from "./components/EventList";
import "./App.css";

const App = () => {
    return (
      <div className="App">
        <h1>Community Board</h1>
        <EventList />
      </div>
    );
};

export default App;