import { Route, Routes } from "react-router-dom";
import Intro from "./intro";
import Menu from "./Menu";
import Payment from "./Payment";
import Result from "./Result";
import OptionCoffee from "./OptionCoffee";
import OptionNonCoffee from "./OptionNoncoffee";
import OptionSmoothie from "./OptionSmoothie";
import Coffee from "./coffee";
import Noncoffee from "./nonCoffee";
import Smoothie from "./smoothie";
import Cake from "./cake";
import Ciabatta from "./ciabatta";
import Cookie from "./cookie";
import Drink from "./drink";
import Dessert from "./dessrt";
import "./css/default.css";
import "./css/App.css";
import Vip from "./Vip";
import VipResult from "./VipResult";

function App() {
  return (
    <div className="outer">
      <Routes>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/menu" element={<Menu></Menu>}>
          <Route path="drink" element={<Drink></Drink>}>
            <Route index element={<Coffee />}></Route>
            <Route path="nonCoffee" element={<Noncoffee />}></Route>
            <Route path="smoothie" element={<Smoothie />}></Route>
          </Route>
          <Route path="dessert" element={<Dessert />}>
            <Route index element={<Cake />}></Route>
            <Route path="ciabatta" element={<Ciabatta />}></Route>
            <Route path="cookie" element={<Cookie />}></Route>
          </Route>
        </Route>
        <Route path="/optionCoffee/:id" element={<OptionCoffee />} />
        <Route path="/optionNoncoffee/:id" element={<OptionNonCoffee />} />
        <Route path="/optionCoffee/:id" element={<OptionCoffee />} />
        <Route path="/optionSmoothie/:id" element={<OptionSmoothie />} />
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="/vip" element={<Vip></Vip>}></Route>
        <Route path="/vipresult/:phone" element={<VipResult/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
