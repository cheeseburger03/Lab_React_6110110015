import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Active"
function App() {
  return (
    <body>
      <p><div id="header" className = "Header"> Guessing WordCard </div> </p>
      
      <p id="discription" className = "body1">I'm thinking of an English word. Make guesses by clicking letter and I'll tell you if my word is alphabetically before or after your guess.</p>
      <p id="discription" className = "body1">If it correct. All card will be turned green </p>
      <div id="border2" className= " border"> </div>
      <WordCard value={word}/>
      <div id="border3" className="border" ></div>
    </body>
    
    
  );
}

export default App;
