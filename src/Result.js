import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, setOrderNumber } from "./mainSlice";
import { useEffect, useState } from "react";

function Result() {
  const cartList = useSelector((state) => state.main.cartList);
  const dispatch = useDispatch();
  const orderNumber = useSelector((state) => state.main.orderNumber);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      dispatch(clearCart());
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [dispatch, navigate]);
  return (
    <div className="result_wrap">

      <div className="wrapper">
        <p className="result_text">주문이 완료되었습니다!</p>
        {/* {cartList.map((e) => {
          return (
            <div className="menu">
              <span>{e.name} : {e.amount}</span>
              {(e.option1 || e.option2) && (
                <ul className="opt_list">
                  {e.option1 && <li>{e.option1}</li>}
                  {e.option2 && <li>{e.option2}</li>}
                </ul>
              )}
            </div>
          );
        })} */}
        <div className="total">
          <span>결제금액</span>
          <strong>{new Intl.NumberFormat('ko-KR').format(result)} 원</strong>
        </div>
        <div className="order_num">주문번호 <em>{orderNumber}</em></div>
        <div className="count_wrap"><span className="notice">{countdown}초 후 메인화면으로 돌아갑니다.</span></div>
        <Link to="/" className="btn large" onClick={() => { dispatch(clearCart()); dispatch(setOrderNumber()) }}>처음으로</Link>
      </div>

    </div>
  );
}
export default Result;
