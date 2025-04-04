import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Payment() {
  const cartList = useSelector((state) => state.main.cartList);
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  return (
    <div className="order_wrap">
      <ul className="order_list">
        {cartList.map((e) => {
          return (
            <li className="order_item">
              <img src={e.src} />
              <div className="text_box">
                <span className="title">{e.name}</span>
                <span className="price">{e.price} 원</span>
                <span className="amount">수량: {e.amount}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <strong className="total">최종결제금액: {result}</strong>
      <Link to="/result" className="btn">결제하기</Link>
    </div>
  );
}
export default Payment;
