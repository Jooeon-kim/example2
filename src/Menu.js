import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeList, setAmount } from "./mainSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.main.cartList);
  const navigate = useNavigate();
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  // console.log(cartList)
  return (
    <main>
      <h1>menu</h1>
      <div className="menu">
        <div className="tab">
          <ul className="depth1">
            <li><Link to="/menu/drink">Drink</Link></li>
            <li><Link to="/menu/dessert">Dessert</Link></li>
          </ul>
        </div>
        <Outlet />
      </div>

      <div className="bottom_wrap">
        <div className="cart_box">
          <ul className="cart_list">
            {cartList.map((e) => {
              return (
                <li className="cart_item" key={e.cartListid}>
                  <div className="title_wrap">
                    <em className="title">{e.name}</em>
                    <input type="number" value={e.amount} onChange={(item) => dispatch(setAmount({ id: e.cartListid, amount: Number(item.target.value) }))}></input>
                    <button onClick={() => dispatch(removeList(e.cartListid))}>X</button>
                  </div>
                  <ul className="opt_list">
                    <li>{e.option1}</li>
                    <li>{e.option2}{" "}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <strong className="total">Total:{result}</strong>
        <button onClick={() => dispatch(clearCart())}>비우기</button>
        <Link to="/payment" className="btn">다음</Link>
      </div>

    </main>
  );
}
export default Menu;
