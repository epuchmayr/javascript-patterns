import { useState } from 'react';
import { counter as SingletonCounter } from './counter';

function Singleton() {
  // Singleton
  let counter = SingletonCounter;
  const [count, setCount] = useState(counter.currentCount());

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(counter.decrement());
        }}
      >
        decrease count
      </button>&nbsp;
      <button
        onClick={() => {
          setCount(counter.increment());
        }}
      >
        increase count
      </button>
    </>
  );
}


export default Singleton