import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Noncoffee() {
  const nonCoffeeList = useSelector((state) => state.main.nonCoffeeList);
  const navigate =useNavigate();
  return (
    <>
      {nonCoffeeList.map((e) => {
        return (
          <div>
            <img src={e.src} height="100" width="200" onClick={()=>navigate('/optionNoncoffee/'+e.id)}></img>
            <span>{e.name}</span>
            <span>{e.price}</span>
          </div>
        );
      })}
    </>
  );
}
