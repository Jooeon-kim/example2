import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bestSeller, countTotalPrice } from "./mainSlice";

function Payment() {
  const cartList = useSelector((state) => state.main.cartList);
  const dispatch = useDispatch();
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  return (
    <div className="payment_wrap">

      <h2>주문내용</h2>
      <div className="wrapper">
        <ul className="order_list">
          {cartList.map((e) => {
            return (
              <li className="order_item">
                <img src={e.src} />
                <div className="text_box">
                  <span className="title">{e.name}</span>
                  <span className="amount">수량 <em>{e.amount}</em></span>
                  <span className="price">{e.price} 원</span>
                  {(e.option1 || e.option2) && (
                    <ul className="opt_list">
                      {e.option1 && <li>{e.option1}</li>}
                      {e.option2 && <li>{e.option2}</li>}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="total">
        <span>결제금액</span>
        <strong>{result} 원</strong>
      </div>
      <Link to="/result" className="btn type2 large">결제하기</Link>
      <Link to="/vip" className="btn large">포인트 적립/사용</Link>

    </div>
  );
}
export default Payment;
