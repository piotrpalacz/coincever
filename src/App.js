import Home from './pages/Home';
import Coins from './pages/Coins';
import Coin from './pages/Coin';
import Navbar from './Components/Navbar';


import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home /> } />
        <Route path="/coins" element={<Coins /> } />
        <Route path="/coin/:coinId" element={<Coin /> } ></Route>
      </Routes>
    </>
  );
}
