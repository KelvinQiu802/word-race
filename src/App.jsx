import './App.css';
import React, { useState } from 'react';
import WordList from './components/WordList';
import Config from './components/Config';
import Word from './components/Word';
import Lists from './Words';
import shuffle from 'just-shuffle';

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
    timeLimit: '5',
    shuffle: true,
    showTime: true,
  });

  let wordList = Lists[selectedLst.book][selectedLst.list];
  if (config.shuffle) {
    wordList = shuffle(wordList);
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
            onClick={() => setPhase(PHASE.start)}
          >
            START
          </button>
        </>
      )}

      {phase == PHASE.start && (
        <>
          <Word wordList={wordList} setPhase={setPhase} />
        </>
      )}

      {phase == PHASE.end && <h1>END</h1>}
    </div>
  );
}

export default App;
