import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPoint, countTotalPrice, setPoint } from "./mainSlice";

function vipInfo(phone, vipList) {
  const vip = vipList.find((e) => e.phone === phone)
  return vip;
}

function Vip() {
  const vipList = useSelector((state) => state.main.vipList)
  const [phone, setPhone] = useState("");
  const vip = vipInfo(phone, vipList);
  const total = useSelector((state) => state.main.totalPrice)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let point = vip ? vip.point : 0;  
  return (
    <div className="wrapper vip_wrap">
      <div className="total">
        <span>결제금액</span>
        <strong>{total}</strong>
      </div>
      <p className="notice">전화번호를 입력하세요</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        setPhone(e.target.text.value)
      }}>
        <input type="text" name="text"></input>
        <button type="submit">확인</button>
      </form>

      {vip ? <><p className="vip_name"><em>{vip.name}</em> 회원님,</p>
        <p className="vip_point">잔여 포인트는 <em>{vip.point}</em> point 입니다.</p>
        <div className="btn_box">
          <button onClick={() => { dispatch(addPoint(phone)); navigate("/vipresult/" + phone) }}>적립하기</button>
          <div>
          <button onClick={() => { dispatch(setPoint(phone)); navigate("/vipresult/" + phone) }}>잔여포인트 사용하기</button>
          <input type="number" step={1000} min={0} max={vip.point} placeholder="1000포인트 단위로 사용됩니다"></input>
          </div>
        </div>
      </> : phone ? <><p className="warning">회원정보가 일치하지 않습니다. 전화번호를 확인해주세요.</p></> : null}
    </div>
  );
};
export default Vip;
