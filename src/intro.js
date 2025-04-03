import { Link, useNavigate } from "react-router-dom";
import jj from "./img/japan2.jpg"
function Intro (){
    const navigate = useNavigate();
    return (
        <>
        <img src={jj} height="200" width="400" onClick={()=>navigate("/menu")}></img>
        <h1>어서오세요 김&&장 식당에</h1>
        
        </>
    )
};
export default Intro;