import React from 'react';

function Config({ config, setConfig }) {
  function handleChange(e) {
    setConfig((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type == 'checkbox' ? e.target.checked : e.target.value,
      };
    });
  }

  return (
    <div className='config'>
      <div>
        <label htmlFor='Time Limit'>Time Limit: </label>
        <input
          name='timeLimit'
          type='text'
          value={config.timeLimit}
          onChange={handleChange}
        />
        <span>seconds</span>
      </div>
      <div>
        <label htmlFor='Shuffle'>Shuffle: </label>
        <input
          type='checkbox'
          name='shuffle'
          checked={config.shuffle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='Show Time'>Show Time: </label>
        <input
          type='checkbox'
          name='showTime'
          checked={config.showTime}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Config;
