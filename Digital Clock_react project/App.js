import React, { useState } from "react";
import TodoApp from "./components/TodoApp";
import FeedbackApp from "./components/FeedbackApp";
import ClockApp from "./components/ClockApp";
import "./index.css";

function App() {
  const [activeApp, setActiveApp] = useState("todo");

  return (
    <div className="main">
      <h1>🌟 React Mini Projects</h1>
      <div className="menu">
        <button onClick={() => setActiveApp("todo")}>📝 To-Do List</button>
        <button onClick={() => setActiveApp("feedback")}>💬 Feedback</button>
        <button onClick={() => setActiveApp("clock")}>🕒 Clock</button>
      </div>

      <div className="project-area">
        {activeApp === "todo" && <TodoApp />}
        {activeApp === "feedback" && <FeedbackApp />}
        {activeApp === "clock" && <ClockApp />}
      </div>
    </div>
  );
}

export default App;
