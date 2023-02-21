import React, { useState, useEffect } from 'react';
import { PHASE } from '../App';

function Word({ wordList, config, setPhase, setForget, setOvertime }) {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);

  const currWord = wordList[index];
  index == wordList.length - 1 && setPhase(PHASE.end);

  function handleNext() {
    setIndex(index + 1);
    if (time > config.timeLimit) {
      setOvertime((prev) => [...prev, { word: currWord, time }]);
    }
    setTime(0);
  }

  function handleForget() {
    setForget((prev) => [...prev, currWord]);
    setIndex(index + 1);
    setTime(0);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(time + 0.1);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className='word'>
      <h1>{currWord}</h1>
      {config.showTime && <h3>{time.toFixed(1)}</h3>}
      <div className='btns'>
        <button type='button' onClick={handleForget}>{`Forget`}</button>
        <button type='button' onClick={handleNext}>{`Next-->`}</button>
      </div>
    </div>
  );
}

export default Word;
