import React, { useState } from 'react';
import { PHASE } from '../App';

function Word({ wordList, setPhase }) {
  const [index, setIndex] = useState(0);
  const currWord = wordList[index];

  index == wordList.length - 1 && setPhase(PHASE.end);

  function handleNext() {
    setIndex(index + 1);
  }

  function handleForget() {}

  return (
    <div className='word'>
      <h1>{currWord}</h1>
      <div className='btns'>
        <button type='button' onClick={handleForget}>{`Forget`}</button>
        <button type='button' onClick={handleNext}>{`Next-->`}</button>
      </div>
    </div>
  );
}

export default Word;
