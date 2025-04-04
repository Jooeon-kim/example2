import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Coffee() {
  const coffeeList = useSelector((state) => state.main.coffeeList);
  const navigate =useNavigate();
  return (
    <>
      {coffeeList.map((e) => {
        return (
          <div>
            <img src={e.src} height="100" width="200" onClick={()=>navigate('/optionCoffee/'+e.id)}></img>
            <span>{e.name}</span>
            <span>{e.price}</span>
          </div>
        );
      })}
    </>
  );
}
