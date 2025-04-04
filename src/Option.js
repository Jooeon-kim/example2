import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setOption } from "./mainSlice";

function Option (props){
    const cartList = useSelector((state)=>state.main.cartList);
    const { id }= useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <>
        <h1>옵션선택</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const state = e.target.option1.value;
                const size = e.target.option2.value;
                dispatch(setOption({id:id,_option1:state,_option2:size}))
            }}>
                <label>연하게</label><input type="radio" value="연하게" name="option1"></input>
                <label>진하게</label><input type="radio" value="진하게" name="option1"></input>
                <br></br>
                <label>Large</label><input type="radio" value="Large" name="option2"></input>
                <label>Medium</label><input type="radio" value="Medium" name="option2"></input>
                <br></br>
                <button type="submit" onClick={()=>{navigate("/menu")}}>확인</button>
               
            </form>
        </>
    )
};
export default Option;