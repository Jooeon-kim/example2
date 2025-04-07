import { Link, useNavigate } from "react-router-dom";
import jj from "./img/non_Logo.png";
import { useSelector } from "react-redux";
function Intro() {
  const navigate = useNavigate();
  const best = useSelector((state)=> state.main.bestMenu);
  return (
    <div className="index">
      <img src="/image/intro/kimjang2.png" onClick={() => navigate("/menu/drink")} />
      <h1>인트로</h1>
      <h1>베스트메뉴!</h1>
      {best.map((e)=>(<div><img src={e.src}></img><div>{e.name}</div></div>))}
    </div>
  );
}
export default Intro;
