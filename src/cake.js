import { useDispatch, useSelector } from "react-redux";
import { addToCartCake } from "./mainSlice";
import { Link } from "react-router-dom";

export default function Cake() {
  const cakeList = useSelector((state) => state.main.cakeList)
  const dispatch = useDispatch();
  return (
    <ul>
      {cakeList.map((e) => {
        return (
          <li>
            <Link onClick={() => dispatch(addToCartCake(e.id))}>
              <img src={e.src} />
              <span className="title">{e.name}</span>
              <span className="price">{e.price}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
