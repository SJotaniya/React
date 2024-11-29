import React, { useEffect, useState } from 'react';

function Ex1blank() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Useeffact is runing');
  }, [count]);

  return (
    <div>
      <h1>Usestate</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default Ex1blank;
