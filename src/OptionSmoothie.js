import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart,  setOptionSmoothie } from "./mainSlice";


function OptionSmoothie (props){

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
                dispatch(setOptionSmoothie({id:id,_option1:state,_option2:size}))
            }}>
                <label>일회용</label><input type="radio" value="일회용" name="option1"></input>
                <label>매장용</label><input type="radio" value="매장용" name="option1"></input>
                <br></br>
                <label>Ragular</label><input type="radio" value="Ragular" name="option2"></input>
                <label>Medium</label><input type="radio" value="Medium" name="option2" selected></input>
                <label>Large</label><input type="radio" value="Large" name="option2"></input>
                <br></br>
                <button type="submit" onClick={()=>{navigate("/menu/drink/smoothie")}}>확인</button>
               
            </form>
        </>
    )
};
export default OptionSmoothie;