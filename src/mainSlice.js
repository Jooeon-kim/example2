import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    coffeeList: [
      {
        id: 1,
        src: "./drink/coffee/coffee1.jpg",
        price: 2500,
        name: "아메리카노 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./drink/coffee/coffee2.jpg",
        price: 3000,
        name: "아메리카노 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "./drink/coffee/coffee3.jpg",
        price: 2800,
        name: "카페라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 4,
        src: "./drink/coffee/coffee4.jpg",
        price: 3300,
        name: "카페라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 5,
        src: "./drink/coffee/coffee5.jpg",
        price: 2000,
        name: "에스프레소",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 6,
        src: "./drink/coffee/coffee6.jpg",
        price: 3500,
        name: "콜드브루",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    nonCoffeeList: [
      {
        id: 1,
        src: "./drink/latte_ade/ade1.jpg",
        price: 2500,
        name: "청포도 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./drink/latte_ade/ade2.jpg",
        price: 2500,
        name: "레몬 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "./drink/latte_ade/ade3.jpg",
        price: 2500,
        name: "자몽 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 4,
        src: "./drink/latte_ade/latte1.jpg",
        price: 2500,
        name: "초코라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 5,
        src: "./drink/latte_ade/latte2.jpg",
        price: 2500,
        name: "초코라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 6,
        src: "./drink/latte_ade/latte3.jpg",
        price: 2500,
        name: "고구마라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 7,
        src: "./drink/latte_ade/latte4.jpg",
        price: 2500,
        name: "고구마라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    smoothieList: [
      {
        id: 1,
        src: "./drink/smoothie/smoothie1.jpg",
        price: 4800,
        name: "딸기 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./drink/smoothie/smoothie2.jpg",
        price: 4800,
        name: "코코넛 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "./drink/smoothie/smoothie3.jpg",
        price: 4800,
        name: "블루베리 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 4,
        src: "./drink/smoothie/smoothie4.jpg",
        price: 4800,
        name: "망고 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    cakeList: [
      {
        id: 1,
        src: "./dessert/cake/cake1.jpg",
        price: 4800,
        name: "치즈 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./dessert/cake/cake2.jpg",
        price: 4800,
        name: "초코 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "./dessert/cake/cake3.jpg",
        price: 4800,
        name: "티라미수 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    cookieList: [
      {
        id: 1,
        src: "./dessert/cookie/cookie1.jpg",
        price: 2800,
        name: "말차 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./dessert/cookie/cookie2.jpg",
        price: 2500,
        name: "밀크티 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "./dessert/cookie/cookie3.jpg",
        price: 2800,
        name: "초코 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    ciabattaList: [
      {
        id: 1,
        src: "./dessert/ciabatta/ciabatta1.jpg",
        price: 5800,
        name: "바질 치폴레 치킨",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "./dessert/ciabatta/ciabatta2.jpg",
        price: 5800,
        name: "핫치킨 앤 딥치즈",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    vipList: [{ name: "김주언", phone: "01099605629", point: 1000 }],
    cartList: [],
    cartListId: 1,
  },
  reducers: {
    setAmount: (state, action) => {
      const { id, amount } = action.payload;
      const menu = state.cartList.find((e) => e.cartListid === id);
      if (menu) {
        menu.amount = amount;
      }
    },
    addToCartCake: (state, action) => {
      const product = state.cakeList.find(
        (e) => e.id === Number(action.payload)
      );
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
    },
    addToCartCiabatta: (state, action) => {
      const product = state.ciabattaList.find(
        (e) => e.id === Number(action.payload)
      );
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
    },
    addToCartCookie: (state, action) => {
      const product = state.cookieList.find(
        (e) => e.id === Number(action.payload)
      );
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
    },
    removeList: (state, action) => {
      state.cartList = state.cartList.filter(
        (e) => e.cartListid !== Number(action.payload)
      );
    },
    clearCart: (state) => {
      state.cartList = [];
      state.cartListId = 0;
    },
    setOption: (state, action) => {
      const { id, _option1, _option2 } = action.payload;
      const menu = state.menuList.find((e) => e.id === Number(id));
      if (menu) {
        menu.option1 = _option1;
        menu.option2 = _option2;
        const newCart = { ...menu, cartListid: state.cartListId };
        state.cartListId++;
        state.cartList.push(newCart);
      }
    },
    addVip: (state, action) => {
      const { _name, _phone } = action.payload;
      state.vipList.push({ name: _name, phone: _phone, point: 0 });
    },
  },
});
export const { setAmount, addToCartCake, addToCartCookie, addToCartCiabatta, removeList, clearCart, setOption } =
  mainSlice.actions;
export default mainSlice;
