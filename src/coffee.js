import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Coffee() {
  const coffeeList = useSelector((state) => state.main.coffeeList);
  return (
    <ul>
      {coffeeList.map((e) => {
        return (
          <li>
            <Link to={'/optionCoffee/' + e.id}>
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
