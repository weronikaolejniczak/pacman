import React, {useState} from 'react';
import {Header, Board} from './components';
import './App.css';

/* TODO:
- Ghost and Pacman collision, collision animation and game over
- Add Walls
- Add Pacman lives
- Start Game, Game Over and Success screens 
- HOC Sprint for Pacman and Ghost and render prop
- Always focus on Pacman (onClick App?)
*/
function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} />
      <Board setScore={setScore} />
    </div>
  );
}

export default App;
