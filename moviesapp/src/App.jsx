// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navnbar";
import Home from '../src/pages/Home'

import SelectorComponent from "./components/SelectorComponent";
import { ssrImportKey } from "vite/module-runner";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </>
  );
}

export default App;
