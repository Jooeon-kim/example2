import { NavLink, Outlet } from "react-router-dom";

export default function Drink() {
  return (
    <>
      <div className="menu_box">
        <div className="tab tab2">
          <ul className="depth2">
          <li><NavLink to="/menu/drink" end>Coffee</NavLink></li>
            <li><NavLink to="/menu/drink/nonCoffee">nonCoffee</NavLink></li>
            <li><NavLink to="/menu/drink/smoothie">smoothie</NavLink></li>
          </ul>
        </div>
        <div className="box_wrap">
          <Outlet />
        </div>
      </div>
    </>
  );
}
