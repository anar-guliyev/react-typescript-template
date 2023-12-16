import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Hot refreshing is enabled</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  );
};
