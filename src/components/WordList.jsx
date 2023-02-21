import React from 'react';
import Lists from '../Words';

const CET4 = Lists['CET-4'];
const TOEFL = Lists.TOEFL;

function WordList({ lst, setLst }) {
  const selectedStyle = {
    color: 'blue',
    textDecorationLine: 'underline',
  };

  return (
    <div className='word-lst'>
      <h2>CET-4</h2>
      {Object.keys(CET4).map((title) => (
        <h3
          key={title}
          style={title == lst.list ? selectedStyle : {}}
          onClick={() => setLst({ book: 'CET-4', list: title })}
        >
          {title}
        </h3>
      ))}
      <h2>TOEFL</h2>
      {Object.keys(TOEFL).map((title) => (
        <h3
          key={title}
          style={title == lst.list ? selectedStyle : {}}
          onClick={() => setLst({ book: 'TOEFL', list: title })}
        >
          {title}
        </h3>
      ))}
    </div>
  );
}

export default WordList;
