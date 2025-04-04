import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Smoothie() {
  const smoothieList = useSelector((state) => state.main.smoothieList);
  const navigate =useNavigate();
  return (
    <>
      {smoothieList.map((e) => {
        return (
          <div>
            <img src={e.src} height="100" width="200" onClick={()=>navigate('/optionSmoothie/'+e.id)}></img>
            <span>{e.name}</span>
            <span>{e.price}</span>
          </div>
        );
      })}
    </>
  );
}
