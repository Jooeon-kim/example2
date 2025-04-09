import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Intro() {
  const navigate = useNavigate();
  const best = useSelector((state) => state.main.bestMenu);
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  const randomImagePath = `/image/intro/kimjang${randomIndex}.png`;
  return (
    <div className="intro" onClick={() => navigate("/menu/drink")}>

      <div className="intro_box">
        <h1>김&&장 Cafe</h1>
        <img src={randomImagePath} className="intro_img" />
        <div className="enter">주문하기</div>
      </div>

      <div className="best_box">
        <h2>인기 메뉴</h2>
        <ol className="best_list">
          {best.map((e) => (
            <li className="best_item">
              <img src={e.src} className="best_img" />
              <span className="title">{e.name}</span>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
export default Intro;
