import { Link, Outlet } from "react-router-dom";

export default function Drink(){
    return(
        <>       
        <Link to="/menu/drink/coffee">Coffee</Link>
        {/* <Link>nonCoffee</Link>
        <Link>smoothie</Link>  */}
        <Outlet/>
        </>
    );
}