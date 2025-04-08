import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setAmount, setOptionCoffee } from "./mainSlice";
import { useState } from "react";

function OptionCoffee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.main.coffeeList.find((i) => i.id === Number(id))
  );

  const [amount, setAmount] = useState(1); // 수량 상태
  const [showPrice, setShowPrice] = useState(item.price)
  const [size, setSize] = useState("");

  let totalPrice = item.price;

  const handleSizeChange = (size) => {
    let additionalPrice = 0;
    if (size === "Medium") {
      additionalPrice = 500;
    } else if (size === "Large") {
      additionalPrice = 1000;
    }
    setSize(size);
    setShowPrice(item.price + additionalPrice); // 가격을 갱신
  };

  const handleMinus = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const handlePlus = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="wrapper option_wrap">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const state = e.target.option1.value;
          const size = e.target.option2.value;

          if (!state && !size) {
            alert("옵션을 선택해 주세요.");
            return;
          } else if (!size) {
            alert("음료 사이즈를 선택해 주세요.");
            return;
          } else if (!state) {
            alert("용기를 선택해 주세요.");
            return;
          }
          if (size === "Medium") {
            totalPrice += 500;
          } else if (size === "Large") {
            totalPrice += 1000;

          }

          dispatch(
            setOptionCoffee({
              id,
              _option1: state,
              _option2: size,
              _amount: amount,
              _price: totalPrice,
            })
          );

          navigate("/menu/drink");
        }}
      >
        <h2>옵션선택</h2>
        <div className="top_box">
          <div className="title">{item.name}</div>
          <div className="price">{new Intl.NumberFormat('ko-KR').format(showPrice)} 원</div>
          <img src={item.src} className="img" />
        </div>

        <div className="amount">
          <div className="left">수량</div>
          <div className="right">
            <button type="button" className="minus" onClick={handleMinus}>-</button>
            <span className="num">{amount}</span>
            <button type="button" className="plus" onClick={handlePlus}>+</button>
          </div>
        </div>

        {/* 옵션 선택 부분 */}
        <div className="opt_wrap">
          <div className="opt_box box1">
            <div className="opt_title">용기 선택</div>
            <ul className="opt_ul opt1">
              <li className="opt_item">
                <input type="radio" value="매장용" name="option1" id="opt1_2" />
                <label htmlFor="opt1_2">매장용</label>
              </li>
              <li className="opt_item">
                <input type="radio" value="일회용" name="option1" id="opt1_1" />
                <label htmlFor="opt1_1">일회용</label>
              </li>
            </ul>
          </div>
          <div className="opt_box box2">
            <div className="opt_title">사이즈 선택</div>
            <ul className="opt_ul opt2">
              <li className="opt_item">
                <input type="radio" value="Ragular" name="option2" id="opt2_1" onChange={() => handleSizeChange("Regular")} />
                <label htmlFor="opt2_1">Ragular<span>0원</span></label>
              </li>
              <li className="opt_item">
                <input type="radio" value="Medium" name="option2" id="opt2_2" onChange={() => handleSizeChange("Medium")} />
                <label htmlFor="opt2_2">Medium<span>500원</span></label>
              </li>
              <li className="opt_item">
                <input type="radio" value="Large" name="option2" id="opt2_3" onChange={() => handleSizeChange("Large")} />
                <label htmlFor="opt2_3">Large<span>1,000원</span></label>
              </li>
            </ul>
          </div>
        </div>

        <button type="submit" className="btn type2 large">선택</button>
      </form>
    </div>
  );
}
export default OptionCoffee;