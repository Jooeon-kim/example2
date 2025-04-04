import { useSelector } from "react-redux";

export default function Coffee (){
    const coffeeList = useSelector((state)=>state.main.coffeeList)
    return(
        <>
        {coffeeList.map((e)=> {
            return(
                <div>
                    <img src={e.src} height="100" width="200"></img>
                    <span>{e.name}</span>
                    <span>{e.price}</span>
                </div>
            )
        })}
        </>
    );
}