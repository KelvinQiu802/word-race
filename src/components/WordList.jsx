import React from 'react';
import Lists from '../Words';
import { BOOKS } from '../App';

const CET4 = Lists['CET-4'];
const TOEFL = Lists.TOEFL;

function WordList({ lst, setLst }) {
  const selectedStyle = {
    color: 'blue',
    textDecorationLine: 'underline',
  };

  return (
    <div className='word-lst'>
      {BOOKS.map((book) => {
        return (
          <div key={book}>
            <h2>{book}</h2>
            {Object.keys(Lists[book]).map((title) => (
              <h3
                key={title}
                style={
                  title == lst.list && lst.book == book ? selectedStyle : {}
                }
                onClick={() => setLst({ book, list: title })}
              >
                {title}
              </h3>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default WordList;
