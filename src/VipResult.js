import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { clearCart } from "./mainSlice";
import { useEffect, useState } from "react";


function VipResult() {
  const cartList = useSelector((state) => state.main.cartList);
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
        <p className="vip_name">{vip.name}님!</p>
        <p className="result_text">주문이 완료되었습니다!</p>
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
        <div className="order_num">주문번호 <em>{orderNumber}</em></div>
        {/* <div className="total">
        <span>결제금액</span>
        <strong>{totalPrice}</strong>
      </div> */}
        <p>잔여포인트:{vip.point}</p>

        <div className="count_wrap"><p className="notice">{countdown}초 후 메인화면으로 돌아갑니다.</p></div>

        <Link to="/" className="btn" onClick={() => dispatch(clearCart())}>처음으로</Link>
      </div>

    </div>
  );
}
export default VipResult;
