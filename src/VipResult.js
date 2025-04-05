import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearCart } from "./mainSlice";

function VipResult() {
  const cartList = useSelector((state) => state.main.cartList);
  const dispatch = useDispatch();
  const { phone } = useParams();
  const totalPrice = useSelector((state)=>state.main.totalPrice);
  const vip = useSelector((state)=>state.main.vipList).find((e)=>e.phone===phone)
  return (
    <div className="result_wrap">
      <p>{vip.name}님!</p>
      <p className="notice">주문이 완료되었습니다!</p>
      {cartList.map((e) => {
        return (
          <div>
            <span>{e.name} : {e.amount}</span>
          </div>
        );
      })}
      <strong className="total">결제금액:{totalPrice}</strong>
      <p>잔여포인트:{vip.point}</p>
      <Link to="/" className="btn" onClick={() => dispatch(clearCart())}>처음으로</Link>
    </div>
  );
}
export default VipResult;
