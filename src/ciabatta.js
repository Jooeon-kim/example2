import { useSelector, useDispatch } from "react-redux";
import { addToCartCiabatta } from "./mainSlice";
import { Link } from "react-router-dom";

export default function Ciabatta() {
  const ciabattaList = useSelector((state) => state.main.ciabattaList);
  const dispatch = useDispatch();
  return (
    <ul>
      {ciabattaList.map((e) => {
        return (
          <li>
            <Link onClick={() => dispatch(addToCartCiabatta(e.id))}>
              <img src={e.src} />
              <div className="text_box">
                <span className="title">{e.name}</span>
                <span className="price">{e.price}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
