import { Link, Outlet } from "react-router-dom";

export default function Drink() {
  return (
    <>
      <div className="tab">
        <ul className="depth2">
          <li><Link to="/menu/drink/coffee">Coffee</Link></li>
          <li><Link to="/menu/drink/nonCoffee">nonCoffee</Link></li>
          <li><Link to="/menu/drink/smoothie">smoothie</Link></li>
        </ul>
      </div>
      <div className="menu_box">
        <Outlet />
      </div>
    </>
  );
}
