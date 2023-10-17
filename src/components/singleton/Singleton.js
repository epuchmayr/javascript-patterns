import { useState } from 'react';
import { counter as SingletonCounter } from './counter';
import { Button } from '@mui/material';



function Singleton() {
  // Singleton
  let counter = SingletonCounter;
  const [count, setCount] = useState(counter.currentCount());

  return (
    <>
      <div style={{fontSize: '2rem'}}>{count}</div>
      <Button
        variant='contained'
        onClick={() => {
          setCount(counter.decrement());
        }}
      >
        decrease count
      </Button>&nbsp;
      <Button
        variant='contained'
        onClick={() => {
          setCount(counter.increment());
        }}
      >
        increase count
      </Button><br />
      <Button
        variant='contained'
        onClick={() => {
          setCount(counter.other((a) => a*a));
        }}
      >
        passed fn a^2
      </Button>&nbsp;
      <Button
        variant='contained'
        onClick={() => {
          setCount(counter.other((a) => Math.sqrt(a)));
        }}
      >
        passed fn sqrt
      </Button>&nbsp;
      <Button
        variant='contained'
        onClick={() => {
          setCount(counter.other((a) => Math.round(a)));
        }}
      >
        passed fn round
      </Button>
    </>
  );
}


export default Singleton