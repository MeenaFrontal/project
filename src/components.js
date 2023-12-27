// useCounter.js
import { useState, useEffect } from 'react';

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return { count, increment, decrement };
};

export default useCounter;
