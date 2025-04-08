import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Noncoffee() {
  const nonCoffeeList = useSelector((state) => state.main.nonCoffeeList);
  return (
    <ul>
      {nonCoffeeList.map((e) => {
        return (
          <li>
            <Link to={'/optionNoncoffee/'+e.id}>
            <img src={e.src}/>
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
