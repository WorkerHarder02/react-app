import { useState } from "react";
import Approve from "./components/Approve";
import Order from "./components/Order";

function App() {
  const [state, setState] = useState({
    price: 0,
    email: "",
    phone: ""
  })

  return (
    <div className="App">
      <Approve price={state.price} />
      <Order setState={setState} />
    </div>
  );
}

export default App;
