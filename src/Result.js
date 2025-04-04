import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "./mainSlice";

function Result() {
  const cartList = useSelector((state) => state.main.cartList);
  const dispatch = useDispatch();
  let result = 0;
  for (let i of cartList) {
    result += Number(i.amount) * Number(i.price);
  }

  return (
    <div className="result_wrap">
      <p className="notice">주문이 완료되었습니다!</p>
      {cartList.map((e) => {
        return (
          <div>
            <span>{e.name} : {e.amount}</span>
          </div>
        );
      })}
      <strong className="total">결제금액:{result}</strong>
      <Link to="/" className="btn" onClick={() => dispatch(clearCart())}>처음으로</Link>
    </div>
  );
}
export default Result;
