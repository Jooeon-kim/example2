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
    <>
      <h1>menu</h1>
      <ul className="depth1">
        <li>
          <Link to="/menu/drink">Drink</Link>
        </li>
        <li>
          <Link to="/menu/dessrt">Dessert</Link>
        </li>
      </ul>
      <Outlet />

      <hr></hr>
      <ul>
        {cartList.map((e) => {
          return (
            <li key={e.cartListid}>
              {e.name}....
              <input
                type="number"
                value={e.amount}
                onChange={(item) =>
                  dispatch(
                    setAmount({
                      id: e.cartListid,
                      amount: Number(item.target.value),
                    })
                  )
                }
              ></input>
              <button onClick={() => dispatch(removeList(e.cartListid))}>
                X
              </button>
              <br></br>ㄴ{e.option1}ㄴ {e.option2}{" "}
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch(clearCart())}>리셋</button>
      <h2>결제금액:{result}</h2>
      <Link to="/payment">결제화면으로</Link>
    </>
  );
}
export default Menu;
