import React, { useState } from 'react';
import Button from '@mui/material/Button';


const ItemCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div className="counter-title">
      <h2>Item Count: {count}</h2>
      </div>
      <div className="counter-buttons-container">
      <Button className="counter-button" onClick={increment} size="small" variant="contained">+</Button>
      {/* <button onClick={increment}>Increment</button> */}
      <Button onClick={() => alert(`Added ${count} item(s) to cart`)} size="small" variant="outlined">Add to cart</Button>
      {/* <button onClick={() => alert(`Added ${count} item(s) to cart`)}>Add to cart</button> */}
      <Button className="counter-button" onClick={decrement} size="small" variant="contained">-</Button>
      {/* <button onClick={decrement}>Decrement</button> */}
      </div>
    </div>
  );
};

export default ItemCount;
