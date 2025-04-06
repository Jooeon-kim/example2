import { Link, Outlet } from "react-router-dom";

export default function Dessert() {
  return (
    <>
      <div className="menu_box">
        <div className="tab tab2">
          <ul className="depth2">
            <li><Link to="/menu/dessert">Cake</Link></li>
            <li><Link to="/menu/dessert/ciabatta">Ciabatta</Link></li>
            <li><Link to="/menu/dessert/cookie">Cookie</Link></li>
          </ul>
        </div>
        <div className="box_wrap">
          <Outlet />
        </div>
      </div>
    </>
  );
}
