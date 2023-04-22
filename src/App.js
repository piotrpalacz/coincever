import Home from './pages/Home';
import Coins from './pages/Coins';
import Navbar from './Components/Navbar';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/coins" element={<Coins /> } />
      </Routes>
    </>
  );
}

export default App;
