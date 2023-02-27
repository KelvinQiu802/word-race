import './App.css';
import React, { useState } from 'react';
import WordList from './components/WordList';
import Config from './components/Config';
import Word from './components/Word';
import Lists from './Words';
import shuffle from 'just-shuffle';
import End from './components/End';

export const PHASE = {
  prepare: 0,
  start: 1,
  end: 2,
};

export const BOOKS = ['CET-4', 'TOEFL'];

function App() {
  const [phase, setPhase] = useState(PHASE.prepare);
  const [selectedLst, setSelectedLst] = useState({
    book: BOOKS[0],
    list: 'Day1',
  });
  const [config, setConfig] = useState({
    timeLimit: '3',
    shuffle: true,
    showTime: false,
  });
  const [forget, setForget] = useState([]);
  const [overtime, setOvertime] = useState([]);

  let wordList = Lists[selectedLst.book][selectedLst.list];

  function handleStart() {
    setPhase(PHASE.start);
    setConfig((prev) => {
      return { ...prev, shuffle: false };
    });
  }

  return (
    <div className='App'>
      <h1>{`<Word Race />`}</h1>
      {phase == PHASE.prepare && (
        <>
          <WordList lst={selectedLst} setLst={setSelectedLst} />
          <Config config={config} setConfig={setConfig} />
          <button
            className='start'
            disabled={selectedLst.list ? false : true}
            onClick={handleStart}
          >
            START
          </button>
        </>
      )}

      {phase == PHASE.start && (
        <Word
          wordList={config.shuffle ? shuffle(wordList) : wordList}
          config={config}
          setPhase={setPhase}
          setForget={setForget}
          setOvertime={setOvertime}
        />
      )}

      {phase == PHASE.end && <End forget={forget} overtime={overtime} />}
    </div>
  );
}

export default App;
