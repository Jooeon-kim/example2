import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { setOption } from "./mainSlice";

function Option (props){
    const cartList = useSelector((state)=>state.main.cartList);
    const { id }= useParams();
    const navigate = useNavigate();
    const menu = useSelector((state) =>
        state.main.menuList.find((item) => item.id === Number(id))
    );
    const dispatch = useDispatch();
    return(
        <>
        <h1>옵션선택</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const state = e.target.option1.value;
                const size = e.target.option2.value;
                dispatch(setOption({id:menu.id,_option1:state,_option2:size}))
            }}>
                <label>연하게</label><input type="radio" value="연하게" name="option1"></input>
                <label>진하게</label><input type="radio" value="진하게" name="option1"></input>
                <label>Large</label><input type="radio" value="Large" name="option2"></input>
                <label>Medium</label><input type="radio" value="Medium" name="option2"></input>
                
                <button type="submit" onClick={()=>navigate("/menu")}>확인</button>
            </form>
        </>
    )
};
export default Option;