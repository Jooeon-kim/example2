import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setOptionSmoothie } from "./mainSlice";


function OptionSmoothie(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="select_option">
            <form onSubmit={(e) => {
                e.preventDefault();
                let state = e.target.option1.value;
                let size = e.target.option2.value;
                if(!state&&!size)
                    {
                        state = "일회용";
                        size = "Medium";
                    }
                    else if(!size){
                        size = "Medium"
                    }else if(!state){
                        state="일회용";
                    }
                dispatch(setOptionSmoothie({ id: id, _option1: state, _option2: size }))
            }}>
                <h2>옵션선택</h2>

                <fieldset>
                    <legend>컵종류 선택</legend>
                    <ul className="opt_list1">
                        <li><label><input type="radio" value="일회용" name="option1" ></input>일회용</label></li>
                        <li><label><input type="radio" value="매장용" name="option1"></input>매장용</label></li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>사이즈 선택</legend>
                    <ul className="opt_list2">
                        <li><label><input type="radio" value="Ragular" name="option2"></input>Ragular</label></li>
                        <li><label><input type="radio" value="Medium" name="option2" ></input>Medium</label></li>
                        <li><label><input type="radio" value="Large" name="option2"></input>Large</label></li>
                    </ul>
                </fieldset>

                <button type="submit" onClick={() => { navigate("/menu/drink/smoothie") }}>확인</button>

            </form>
        </div>
    )
};
export default OptionSmoothie;