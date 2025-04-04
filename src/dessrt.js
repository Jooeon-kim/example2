import { Link, Outlet } from "react-router-dom";

export default function Dessert() {
  return (
    <>
      <div className="tab">
        <ul className="depth2">
          <li><Link to="/menu/dessert/cake">Cake</Link></li>
          <li><Link to="/menu/dessert/ciabatta">Ciabatta</Link></li>
          <li><Link to="/menu/dessert/cookie">Cookie</Link></li>
        </ul>
      </div>
      <div className="menu_box">
      <Outlet />
      </div>
    </>
  );
}
