import { useDispatch, useSelector } from "react-redux";
import { addToCartCookie } from "./mainSlice";
import { Link } from "react-router-dom";

export default function Cookie() {
  const cookieList = useSelector((state) => state.main.cookieList)
  const dispatch = useDispatch();
  return (
    <ul>
      {cookieList.map((e) => {
        return (
          <li>
            <Link onClick={() => dispatch(addToCartCookie(e.id))}>
              <img src={e.src} />
              <div className="text_box">
                <span className="title">{e.name}</span>
                <span className="price">{new Intl.NumberFormat('ko-KR').format(e.price)}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
