import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPoint, countTotalPrice, setPoint } from "./mainSlice";

function vipInfo(phone,vipList){
    const vip = vipList.find((e)=>e.phone===phone)
    return vip;
}

function Vip() {
  const vipList = useSelector((state)=>state.main.vipList)
  const [phone , setPhone] =useState("");
  const vip = vipInfo(phone , vipList); 
  const total = useSelector((state)=>state.main.totalPrice)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let point =vip?vip.point:0;
  return (
    <>
      <h1>결제금액: {total}</h1>
      <h1>전화번호를 입력하세요</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        setPhone(e.target.text.value)
      }}>
      <input type="text" name="text"></input>
      <button type="submit">확인</button>
      </form>
      
      {vip?<><h1>{vip.name} 회원님!</h1>
      <h1>잔여 포인트는 {vip.point} point 입니다!</h1>
      <button onClick={()=>{dispatch(addPoint(phone)); navigate("/vipresult/"+phone)}}>적립하기</button>
      <button onClick={()=>{dispatch(setPoint(phone)); navigate("/vipresult/"+phone)}}>잔여포인트 사용하기</button>
    </>:phone?<><h1>회원정보가 일치하지 않습니다! 전화번호를 확인해주세요</h1></>:null}
    </>
  );
};
export default Vip;
