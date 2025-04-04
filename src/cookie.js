import { useDispatch, useSelector } from "react-redux";
import { addToCartCookie } from "./mainSlice";

export default function Cookie() {
    const cookieList = useSelector((state)=> state.main.cookieList)
    const dispatch = useDispatch();
  return(
    <>
    {cookieList.map((e) => {
        return (
          <div>
            <img src={e.src} height="100" width="200" onClick={()=> dispatch(addToCartCookie(e.id))}></img>
            <span>{e.name}</span>
            <span>{e.price}</span>
          </div>
        );
      })}
    </>
  );
}
