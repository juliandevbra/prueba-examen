import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Formexample from "./components/Formexample";
import Listado from "./components/Listado";

function App() {

  const [total, setTotal] = useState(0)

  const aumentar = () => {
    setTotal(total + 1)
    // setTotal((actual) => actual + 1)
  }

  return (
    <div className="App">
      <Cabecera total={total}/>
      <Listado aumentar={aumentar}/>
      <Formexample/>
    </div>
  );
}

export default App;
