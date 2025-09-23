import React, { useState } from "react";

import Productupdates from "./Productupdates";
function Product({ name, price }) {
const [qty, setQty] = useState(0);

  return (
    <div><Productupdates/>
      < >
      <h4>{name}</h4>
      <p>Price: ₹{price}</p>
      <p>Quantity: {qty}</p>
      <p>Total: ₹{qty * price}
        </p><button onClick={() => setQty(qty + 1)}>+</button>
        <button onClick={() => qty > 0 && setQty(qty - 1)}>-</button></>
 
    </div>
  );
}

export default Product;
