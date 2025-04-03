import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeList, setAmount } from "./mainSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Menu(){
    const dispatch = useDispatch();
    const menuList = useSelector((state)=>state.main.menuList)
    const cartList = useSelector((state)=>state.main.cartList)
    const navigate = useNavigate();
    let result = 0 ;
    for(let i of cartList){
        result += Number(i.amount)*Number(i.price)
    }
    return(
        <>
        <h1>menu</h1>
        {menuList.map((e)=>{
            return(
        <div><img src={e.src} height="100" width="200" onClick={()=>navigate("/option/"+e.id)}></img><span>{e.name}</span><span>{e.price}</span>
            
            
        </div>
        )}
        )}
        <hr></hr>
        <ul>
        {cartList.map((e)=>{
            return(
            <li key={e.id}>{e.name}....<input type="number" value={e.amount} 
            onChange={(item)=>dispatch(setAmount({id:e.id, amount:Number(item.target.value)}))}
            ></input><button onClick={()=>dispatch(removeList(e.id))}>X</button><br></br>{e.option1}{e.option2}</li>
        )})}
        </ul>
        <h2>결제금액:{result}</h2>
        <Link to="/payment">결제화면으로</Link>

        </>
    )
};
export default Menu;