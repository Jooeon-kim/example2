import { Link, Outlet } from "react-router-dom";

export default function Drink() {
  return (
    <>
      <div className="menu_box">
        <div className="tab tab2">
          <ul className="depth2">
            <li><Link to="/menu/drink">Coffee</Link></li>
            <li><Link to="/menu/drink/nonCoffee">nonCoffee</Link></li>
            <li><Link to="/menu/drink/smoothie">smoothie</Link></li>
          </ul>
        </div>
        <div className="box_wrap">
          <Outlet />
        </div>
      </div>
    </>
  );
}
