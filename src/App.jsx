import './App.css';
import React, { useState } from 'react';
import WordList from './components/WordList';

function App() {
  const [selectedLst, setSelectedLst] = useState(null);
  return (
    <div className='App'>
      <h1>{`<Word Race>`}</h1>
      <WordList lst={selectedLst} setLst={setSelectedLst} />
    </div>
  );
}

export default App;
