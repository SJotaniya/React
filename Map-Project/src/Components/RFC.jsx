import React from 'react'

export default function Index(name) {
  const [count, setcount] = useState(0);
    const add = () => {
      setcount(count + 1)
    }
    
  return (
    <div>
      <h1 className='txt1'>Funcational Compenent</h1>
      <h1>{count}</h1>
      <button onClick={add}>Increase The Number</button>
    </div>
  )
}