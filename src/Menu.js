import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeList, setAmount,countTotalPrice } from "./mainSlice";
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
      <h2>메뉴선택</h2>
      <div className="menu">
        <div className="tab tab1">
          <ul className="depth1">
            <li><Link to="/menu/drink">Drink</Link></li>
            <li><Link to="/menu/dessert">Dessert</Link></li>
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
                    <ul className="opt_list">
                      <li>{e.option1}</li>
                      <li>{e.option2}{" "}</li>
                    </ul>
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
            <Link to="/payment" className="btn" onClick={()=>dispatch(countTotalPrice())}>주문하기</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
export default Menu;
