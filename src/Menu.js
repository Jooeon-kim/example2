import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeList, setAmount, countTotalPrice, bestSeller } from "./mainSlice";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.main.cartList);
  const navigate = useNavigate();
  const best = useSelector((state)=>state.main.bestMenu);
  let result = 0;
  console.log(best)
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  
  const goToPayment = () => {
    if (cartList.length === 0) {
      alert("장바구니가 비어있습니다!");
      return;
    }
    dispatch(countTotalPrice());
    dispatch(bestSeller());
    navigate("/payment");
  };

  return (
    <main>
      <h2>메뉴선택</h2>
      <div className="menu">
        <div className="tab tab1">
          <ul className="depth1">
          <li><NavLink to="/menu/drink">Drink</NavLink></li>
          <li><NavLink to="/menu/dessert">Dessert</NavLink></li>
          </ul>
        </div>
        <Outlet />
      </div>

      <div className="bottom_wrap">
        <h2>장바구니</h2>
        <button className="clear_btn" onClick={() => dispatch(clearCart())}>전체삭제</button>

        <div className="bottom_box">
          <div className="cart_box">
            <ul className="cart_list">
              {cartList.map((e) => {
                return (
                  <li className="cart_item" key={e.cartListid}>
                    <div className="title_wrap">
                      <em className="title">{e.name}</em>
                      <span className="control_box">
                        <input type="number" value={e.amount} onChange={(item) => dispatch(setAmount({ id: e.cartListid, amount: Number(item.target.value) }))}></input>
                        <button onClick={() => dispatch(removeList(e.cartListid))}>삭제</button>
                      </span>
                    </div>
                    {(e.option1 || e.option2) && (
                      <ul className="opt_list">
                        {e.option1 && <li>{e.option1}</li>}
                        {e.option2 && <li>{e.option2}</li>}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="total_box">
            <div className="total">
              <span>합계</span>
              <strong>{result} 원</strong>
            </div>
            <button className="btn" onClick={goToPayment}>결제하기</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Menu;
