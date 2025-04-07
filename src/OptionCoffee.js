import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setAmount, setOptionCoffee } from "./mainSlice";


function OptionCoffee(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = useSelector((state) => state.main.coffeeList.find(i => i.id === Number(id)));

    return (
        <div className="wrapper option_wrap">
            <form onSubmit={(e) => {
                e.preventDefault();
                let state = e.target.option1.value;
                let size = e.target.option2.value;
                if (!state && !size) {
                    alert("두가지 옵션 모두를 선택해주세요");
                    return;
                }
                else if (!size) {
                    alert("음료 사이즈를 선택해주세요");
                    return;
                } else if (!state) {
                    alert("일회용 또는 매장용을 선택해주세요");
                    return;
                }
                dispatch(setOptionCoffee({ id: id, _option1: state, _option2: size }))

                navigate("/menu/drink")
            }}>

                <h2>옵션선택</h2>
                <div className="top_box">
                    <div className="title">{item.name}</div>
                    <div className="price">{item.price} 원</div>
                    <img src={item.src} className="img" />
                </div>

                <div className="amount">
                    <div className="left">수량</div>
                    <div className="right">
                        <button className="minus">-</button>
                        <span className="num">{item.amount}</span>
                        <button className="plus">+</button>
                    </div>
                </div>

                <div className="opt_wrap">
                    <div className="opt_box box1">
                        <div className="opt_title">용기 선택</div>
                        <ul className="opt_ul opt1">
                            <li className="opt_item"><input type="radio" value="일회용" name="option1" id="opt1_1" /><label htmlFor="opt1_1">일회용</label></li>
                            <li className="opt_item"><input type="radio" value="매장용" name="option1" id="opt1_2" /><label htmlFor="opt1_2">매장용</label></li>
                        </ul>
                    </div>
                    <div className="opt_box box2">
                        <div className="opt_title">사이즈 선택</div>
                        <ul className="opt_ul opt2">
                            <li className="opt_item"><input type="radio" value="Ragular" name="option2" id="opt2_1" /><label htmlFor="opt2_1">Ragular</label></li>
                            <li className="opt_item"><input type="radio" value="Medium" name="option2" id="opt2_2" /><label htmlFor="opt2_2">Medium</label></li>
                            <li className="opt_item"><input type="radio" value="Large" name="option2" id="opt2_3" /><label htmlFor="opt2_3">Large</label></li>
                        </ul>
                    </div>
                </div>

                <button type="submit" className="btn type2 large">선택</button>

            </form>
        </div>
    )
};
export default OptionCoffee;