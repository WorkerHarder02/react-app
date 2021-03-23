import { useState } from "react";
import Approve from "./components/Approve";
import Order from "./components/Order";
import UserInfo from "./components/UserInfo";

function App() {
  const [state, setState] = useState({
    price: 0,
    email: "",
    phone: ""
  })
  const [page]
  return (


    <><Order></Order>
      <UserInfo></UserInfo>
      <Approve></Approve>
    </>

  );
}

export default App;
