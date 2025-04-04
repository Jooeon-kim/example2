import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./intro";
import Menu from "./Menu";
import Payment from "./Payment";
import Result from "./Result";
import Option from "./Option";
import Coffee from "./coffee";
import Noncoffee from "./nonCoffee";
import Smoothie from "./smoothie";
import Cake from "./cake";
import Ciabatta from "./ciabatta";
import Cookie from "./cookie";
import Drink from "./drink";
import Dessert from "./dessrt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/menu" element={<Menu></Menu>}>
          <Route path="drink" element={<Drink></Drink>}>
            <Route path="coffee" element={<Coffee />}></Route>
            <Route path="nonCoffee" element={<Noncoffee />}></Route>
            <Route path="smoothie" element={<Smoothie />}></Route>
          </Route>
          <Route path="dessrt" element={<Dessert />}>
            <Route path="cake" element={<Cake />}></Route>
            <Route path="ciabatta" element={<Ciabatta />}></Route>
            <Route path="cookie" element={<Cookie />}></Route>
          </Route>
        </Route>
        <Route path="/option/:id" element={<Option />} />
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </>
  );
}

export default App;
