import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Vip() {
  const dispatch = useDispatch();
  return (
    <>
      <form onSubmit={(e) => {}}>
        <h1>핸드폰 번호를 입력하세요</h1>
        <input
          type="text"
          name="text"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        ></input>
        <button type="submit">완료</button>
      </form>
      <Link>회원가입</Link>
    </>
  );
}
