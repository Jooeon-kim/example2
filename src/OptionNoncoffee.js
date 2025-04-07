import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setOptionNoncoffee } from "./mainSlice";


function OptionNoncoffee(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="wrapper option_wrap">
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
                dispatch(setOptionNoncoffee({ id: id, _option1: state, _option2: size }))
            }}>
                <h2>옵션선택</h2>

                <fieldset>
                    <legend>컵종류 선택</legend>
                    <ul className="opt_ul opt1">
                        <li className="opt_item"><input type="radio" value="일회용" name="option1" id="opt1_1" /><label htmlFor="opt1_1">일회용</label></li>
                        <li className="opt_item"><input type="radio" value="매장용" name="option1" id="opt1_2" /><label htmlFor="opt1_2">매장용</label></li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>사이즈 선택</legend>
                    <ul className="opt_ul opt2">
                        <li className="opt_item"><input type="radio" value="Ragular" name="option2" id="opt2_1" /><label htmlFor="opt2_1">Ragular</label></li>
                        <li className="opt_item"><input type="radio" value="Medium" name="option2" id="opt2_2" /><label htmlFor="opt2_2">Medium</label></li>
                        <li className="opt_item"><input type="radio" value="Large" name="option2" id="opt2_3" /><label htmlFor="opt2_3">Large</label></li>
                    </ul>
                </fieldset>
                <button type="submit" onClick={() => { navigate("/menu/drink/nonCoffee") }}>확인</button>

            </form>
        </div>
    )
};
export default OptionNoncoffee;