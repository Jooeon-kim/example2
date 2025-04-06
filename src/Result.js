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
      <p className="notice">주문이 완료되었습니다!</p>
      {cartList.map((e) => {
        return (
          <div>
            <span>{e.name} : {e.amount}</span>
            {(e.option1 || e.option2) && (
              <ul className="opt_list">
                {e.option1 && <li>{e.option1}</li>}
                {e.option2 && <li>{e.option2}</li>}
              </ul>
            )}
          </div>
        );
      })}
      <h1>주문번호:{orderNumber}</h1>
      <strong className="total">결제금액:{result}</strong>
      <p>{countdown}초 후 메인화면으로 돌아갑니다.</p>
      <Link to="/" className="btn" onClick={() => { dispatch(clearCart()); dispatch(setOrderNumber()) }}>처음으로</Link>
    </div>
  );
}
export default Result;
