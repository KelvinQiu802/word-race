import './App.css';
import React, { useState } from 'react';
import WordList from './components/WordList';
import Config from './components/Config';

const PHASE = {
  prepare: 0,
  start: 1,
  end: 2,
};

function App() {
  const [phase, setPhase] = useState(PHASE.prepare);
  const [selectedLst, setSelectedLst] = useState(null);
  const [config, setConfig] = useState({
    timeLimit: '5',
    shuffle: true,
    showTime: true,
  });

  return (
    <div className='App'>
      <h1>{`<Word Race />`}</h1>
      {phase == PHASE.prepare && (
        <>
          <WordList lst={selectedLst} setLst={setSelectedLst} />
          <Config config={config} setConfig={setConfig} />
          <button
            className='start'
            disabled={selectedLst ? false : true}
            onClick={() => setPhase(PHASE.start)}
          >
            START
          </button>
        </>
      )}
    </div>
  );
}

export default App;
