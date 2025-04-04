import { Link, useNavigate } from "react-router-dom";
import jj from "./img/non_Logo.png"
function Intro (){
    const navigate = useNavigate();
    return (
        <>
        <img src={jj} height="200" width="400" onClick={()=>navigate("/menu")}></img>
        <h1></h1>
        
        </>
    )
};
export default Intro;