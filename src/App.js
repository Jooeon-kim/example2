import { Route, Routes } from 'react-router-dom';
import './App.css';
import Intro from './intro';
import Menu from './Menu';
import Payment from './Payment';
import Result from './Result';
import Option from './Option';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Intro></Intro>}></Route>
    <Route path="/menu" element={<Menu></Menu>}></Route>
    <Route path="/option/:id" element={<Option />} />
    <Route path="/payment" element={<Payment></Payment>}></Route>
    <Route path="/result" element={<Result></Result>}></Route>
    </Routes>
    </>
  );
}

export default App;
