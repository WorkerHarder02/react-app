import { useState } from "react";
import Approve from "./components/Approve";
import Order from "./components/Order";
import UserInfo from "./components/UserInfo";

function App() {
  const [state, setState] = useState({ 
    price: 0,
    email: "",
    phone: "",
    name: ""
  })
  let [page, setPage] = useState(0)
  const pages = [Order, UserInfo, Approve]
  if (page < 0) page = pages.length - 1
  else if (page >= pages.length) page = 0
  const CurrentPage = pages[page]
  return (
    <>
      <button onClick={e => setPage(page - 1)}>{"<"}</button>
      <button onClick={e => setPage(page + 1)}>{">"}</button>
      <CurrentPage setState={setState} state={state}/>
    </>

  );
}

export default App;
