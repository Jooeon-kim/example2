import { useDispatch, useSelector } from "react-redux";
import { addToCartCake } from "./mainSlice";

export default function Cake() {
    const cakeList = useSelector((state)=> state.main.cakeList)
    const dispatch = useDispatch();
  return(
    <>
    {cakeList.map((e) => {
        return (
          <div>
            <img src={e.src} height="100" width="200" onClick={()=> dispatch(addToCartCake(e.id))}></img>
            <span>{e.name}</span>
            <span>{e.price}</span>
          </div>
        );
      })}
    </>
  );
}
