import { NavLink, Outlet } from "react-router-dom";

export default function Dessert() {
  return (
    <>
      <div className="menu_box">
        <div className="tab tab2">
          <ul className="depth2">
          <li><NavLink to="/menu/dessert" end>Cake</NavLink></li>
          <li><NavLink to="/menu/dessert/ciabatta">Ciabatta</NavLink></li>
          <li><NavLink to="/menu/dessert/cookie">Cookie</NavLink></li>
          </ul>
        </div>
        <div className="box_wrap">
          <Outlet />
        </div>
      </div>
    </>
  );
}
