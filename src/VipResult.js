import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { clearCart, setOrderNumber } from "./mainSlice";
import { useEffect, useState } from "react";


function VipResult() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { phone } = useParams();
  const totalPrice = useSelector((state) => state.main.totalPrice);
  const orderNumber = useSelector((state) => state.main.orderNumber);
  const vip = useSelector((state) => state.main.vipList).find((e) => e.phone === phone)
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      dispatch(clearCart());
      dispatch(setOrderNumber());
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
        <div className="total">
          <span>결제금액</span>
          <strong>{new Intl.NumberFormat('ko-KR').format(totalPrice)} 원</strong>
        </div>
        <p className="point">
          <span>{vip.name}</span>님&nbsp;
          <span>잔여포인트</span>
          <em>{new Intl.NumberFormat('ko-KR').format(vip.point)} point</em>
        </p>
        <div className="order_num">주문번호 <em>{orderNumber}</em></div>

        <div className="count_wrap"><span className="notice">{countdown}초 후 메인화면으로 돌아갑니다.</span></div>

        <Link to="/" className="btn large" onClick={() => {dispatch(clearCart()); dispatch(setOrderNumber())}}>처음으로</Link>
      </div>

    </div>
  );
}
export default VipResult;
