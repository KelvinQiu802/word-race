import './App.css';
import React, { useState } from 'react';
import WordList from './components/WordList';
import Config from './components/Config';

function App() {
  const [selectedLst, setSelectedLst] = useState(null);
  const [config, setConfig] = useState({
    timeLimit: '5',
    shuffle: true,
    showTime: true,
  });

  return (
    <div className='App'>
      <h1>{`<Word Race>`}</h1>
      <WordList lst={selectedLst} setLst={setSelectedLst} />
      <Config config={config} setConfig={setConfig} />
    </div>
  );
}

export default App;
