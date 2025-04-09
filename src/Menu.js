import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeList, setAmount, countTotalPrice, bestSeller } from "./mainSlice";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.main.cartList);
  const navigate = useNavigate();

  // 결제 금액 계산
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  result = new Intl.NumberFormat('ko-KR').format(result);
  //계산끝

  // 장바구니 비어있을시 alert
  const goToPayment = () => {
    if (cartList.length === 0) {
      alert("장바구니에 메뉴를 추가해 주세요.");
      return;
    }
    dispatch(countTotalPrice()); // 전체 금액 계산후 전역변수 저장
    dispatch(bestSeller()); // 장바구니 품목을 best3에 반영
    navigate("/payment"); // 결제창 이동
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
                        <span className="price">{new Intl.NumberFormat('ko-KR').format(e.price)} 원</span>
                        <input type="number" value={e.amount} onChange={(item) => dispatch(setAmount({ id: e.cartListid, amount: Number(item.target.value) }))}></input>
                        <button onClick={() => dispatch(removeList(e.cartListid))}>삭제</button>
                      </span>
                    </div>
                    {(e.option1 || e.option2) && (
                      <ul className="opt_list">
                        {/*같은 옵션값이 존재할시 옵션값 li 로 출력*/}
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
            {/* 버튼 클릭시 함수 호출 */}
            <button className="btn" onClick={goToPayment}>결제하기</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Menu;
