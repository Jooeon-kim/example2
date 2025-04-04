import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Payment() {
  const cartList = useSelector((state) => state.main.cartList);
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }
  return (
    <>
      {cartList.map((e) => {
        return (
          <div>
            <img src={e.src} height="50" width="100"></img>
            <h4>{e.name}</h4>
            <h4>{e.price}원</h4>
            <h4>수량:{e.amount}</h4>
          </div>
        );
      })}
      <h3>최종결제금액:{result}</h3>
      <h4>
        <Link to="/result">결제하기</Link>
      </h4>
    </>
  );
}
export default Payment;
