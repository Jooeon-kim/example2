import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { clearCart } from "./mainSlice";

function Result(){
    const cartList = useSelector((state)=>state.main.cartList);
    const dispatch = useDispatch();
    let result = 0 ;
    for(let i of cartList){
        result += Number(i.amount)*Number(i.price)
    }


    return(
        <>
        <h1>주문이 완료되었습니다!</h1>
        {cartList.map((e)=>{
            return(
                <div><span>{e.name}</span>
                <span>:{e.amount}</span>
                </div>
            )
        })}
        <h1>결제금액:{result}</h1>
        <Link to="/" onClick={()=>dispatch(clearCart())}><h1>홈으로</h1></Link>
        </>
    )
};
export default Result;