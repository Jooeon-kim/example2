import { useSelector, useDispatch } from "react-redux";
import { addToCartCiabatta } from "./mainSlice";

export default function Ciabatta() {
    const ciabattaList =useSelector((state)=>state.main.ciabattaList);
    const dispatch = useDispatch();
  return(
    <>
        {ciabattaList.map((e) => {
            return (
              <div>
                <img src={e.src} height="100" width="200" onClick={()=> dispatch(addToCartCiabatta(e.id))}></img>
                <span>{e.name}</span>
                <span>{e.price}</span>
              </div>
            );
          })}
    </>
  );
}
