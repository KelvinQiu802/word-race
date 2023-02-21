import React from 'react';

function End({ forget, overtime }) {
  return (
    <div className='end'>
      <h1>Overtime</h1>
      {overtime.map((w) => (
        <h2 key={w.word}>{w.word}</h2>
      ))}
      <h1>Forget</h1>
      {forget.map((w) => (
        <h2 key={w}>{w}</h2>
      ))}
    </div>
  );
}

export default End;
