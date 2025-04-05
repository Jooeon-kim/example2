import { Link, useNavigate } from "react-router-dom";
import jj from "./img/non_Logo.png";
function Intro() {
  const navigate = useNavigate();
  return (
    <div className="index">
      <img src={jj} onClick={() => navigate("/menu/drink")} />
      <h1>인트로</h1>
    </div>
  );
}
export default Intro;
