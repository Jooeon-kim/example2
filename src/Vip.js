import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPoint, setPoint } from "./mainSlice";

function vipInfo(phone, vipList) {
  const vip = vipList.find((e) => e.phone === phone)
  return vip;
}

function Vip() {
  const vipList = useSelector((state) => state.main.vipList)
  const [phone, setPhone] = useState("");
  const vip = vipInfo(phone, vipList);
  let total = useSelector((state) => state.main.totalPrice);
  let newTotal = useSelector((state) => state.main.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  total = new Intl.NumberFormat('ko-KR').format(total);
  return (
    <div className="vip_wrap">

      <div className="wrapper">
        <div className="total">
          <span>결제금액</span>
          <strong>{total} 원</strong>
        </div>
        <p className="notice">전화번호를 입력하세요.</p>
        <div className="phone">
          <form onSubmit={(e) => {
            e.preventDefault();
            setPhone(e.target.text.value);
          }}>
            <input type="text" name="text" size={14} maxLength={11}></input>
            <button type="submit">확인</button>
          </form>
        </div>

        {vip ? <><p className="vip_name"><em>{vip.name}</em> 회원님,</p>
          <p className="vip_point">잔여 포인트는 <em>{new Intl.NumberFormat('ko-KR').format(vip.point)}</em> point 입니다.</p>

          <div className="btn_box">
            <div className="save_point">
              <button className="save_btn" onClick={() => { dispatch(addPoint(phone)); navigate("/vipresult/" + phone) }}>적립하기</button>
              <span className="notice">적립률 10%</span>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              let point = e.target.point.value;
              if (!point) {
                alert("사용할 포인트를 입력해주세요")
              }else if(point> newTotal){
                alert("결제금액보다 큰 포인트를 입력하셨습니다")
              }
              else {
                dispatch(setPoint({ _phone: phone, _point: point })); navigate("/vipresult/" + phone)
              }
            }}>
              <div className="use_point">
                <button type="submit" className="use_btn">포인트 사용하기</button>
                <span>사용 포인트</span> <input name="point" type="number" step={100} min={100} max={vip.point} />
                <span className="notice">100원단위 사용</span>
              </div>
            </form>
          </div>
        </> : phone ? <><p className="warning">회원정보가 일치하지 않습니다. 전화번호를 확인해주세요.</p></> : null}
      </div>

    </div>
  );
};
export default Vip;
