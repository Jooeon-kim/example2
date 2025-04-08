import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";

export default function Smoothie() {
  const smoothieList = useSelector((state) => state.main.smoothieList);
  return (
    <ul>
      {smoothieList.map((e) => {
        return (
          <li>
            <Link to={'/optionSmoothie/' + e.id}>
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
