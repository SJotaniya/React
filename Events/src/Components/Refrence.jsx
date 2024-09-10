import React, { useEffect, useRef } from 'react';

function Refrance() {
  const inputref = useRef();
  useEffect(() => {
    inputref.current.focus();

    setTimeout(() => {
      inputref.current.focus();
    }, 2000);
  }, []);

  const handelclick = () => {
    inputref.current.focus();
    let p = inputref.current.value;
  };
  
  return (
    <>
      <input type="text" ref={inputref} />
      <button onClick={handelclick}>Click</button>
    </>
  );
}

export default Refrance;
