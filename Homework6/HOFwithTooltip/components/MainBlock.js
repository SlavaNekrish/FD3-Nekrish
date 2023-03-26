import React, { useState } from 'react';

const MainBlock = () => {

  const [count, setCount] = useState(0);

  return (
      <React.Fragment>
        <span>Вы нажали {count} раз</span><br/>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </React.Fragment>
  );
}

export default MainBlock;