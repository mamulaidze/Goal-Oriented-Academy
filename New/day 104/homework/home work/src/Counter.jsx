import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Counter;
