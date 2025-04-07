import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    coffeeList: [
      {
        id: 1,
        src: "/image/drink/coffee/coffee1.jpg",
        price: 2500,
        name: "아메리카노 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 2,
        src: "/image/drink/coffee/coffee2.jpg",
        price: 3000,
        name: "아메리카노 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 3,
        src: "/image/drink/coffee/coffee3.jpg",
        price: 2800,
        name: "카페라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 4,
        src: "/image/drink/coffee/coffee4.jpg",
        price: 3300,
        name: "카페라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 5,
        src: "/image/drink/coffee/coffee5.jpg",
        price: 2000,
        name: "에스프레소",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 6,
        src: "/image/drink/coffee/coffee6.jpg",
        price: 3500,
        name: "콜드브루",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    nonCoffeeList: [
      {
        id: 7,
        src: "/image/drink/latte_ade/ade1.jpg",
        price: 2500,
        name: "청포도 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 8,
        src: "/image/drink/latte_ade/ade2.jpg",
        price: 2500,
        name: "레몬 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 9,
        src: "/image/drink/latte_ade/ade3.jpg",
        price: 2500,
        name: "자몽 에이드",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 10,
        src: "/image/drink/latte_ade/latte1.jpg",
        price: 2500,
        name: "초코라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 11,
        src: "/image/drink/latte_ade/latte2.jpg",
        price: 2500,
        name: "초코라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 12,
        src: "/image/drink/latte_ade/latte3.jpg",
        price: 2500,
        name: "고구마라떼 HOT",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 13,
        src: "/image/drink/latte_ade/latte4.jpg",
        price: 2500,
        name: "고구마라떼 ICE",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    smoothieList: [
      {
        id: 14,
        src: "/image/drink/smoothie/smoothie1.jpg",
        price: 4800,
        name: "딸기 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 15,
        src: "/image/drink/smoothie/smoothie2.jpg",
        price: 4800,
        name: "코코넛 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 16,
        src: "/image/drink/smoothie/smoothie3.jpg",
        price: 4800,
        name: "블루베리 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 17,
        src: "/image/drink/smoothie/smoothie4.jpg",
        price: 4800,
        name: "망고 스무디",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    cakeList: [
      {
        id: 100,
        src: "/image/dessert/cake/cake1.jpg",
        price: 4800,
        name: "치즈 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 101,
        src: "/image/dessert/cake/cake2.jpg",
        price: 4800,
        name: "초코 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 102,
        src: "/image/dessert/cake/cake3.jpg",
        price: 4800,
        name: "티라미수 케이크",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    
    cookieList: [
      {
        id: 200,
        src: "/image/dessert/cookie/cookie1.jpg",
        price: 2800,
        name: "말차 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 201,
        src: "/image/dessert/cookie/cookie2.jpg",
        price: 2500,
        name: "밀크티 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 202,
        src: "/image/dessert/cookie/cookie3.jpg",
        price: 2800,
        name: "초코 스모어 쿠키",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    
    ciabattaList: [
      {
        id: 300,
        src: "/image/dessert/ciabatta/ciabatta1.jpg",
        price: 5800,
        name: "바질 치폴레 치킨",
        amount: 1,
        option1: null,
        option2: null,
      },
      {
        id: 301,
        src: "/image/dessert/ciabatta/ciabatta2.jpg",
        price: 5800,
        name: "핫치킨 앤 딥치즈",
        amount: 1,
        option1: null,
        option2: null,
      },
    ],
    vipList: [
      { name: "김주언", phone: "01099605629", point: 1000 },
      { name: "장재호", phone: "01048948203", point: 13000},
      { name: "장희용", phone: "01055304774", point: 2000},
      { name: "김준홍", phone: "01093922716", point: 3000},

    ],
    soldList:[],
    bestMenu:[{
      id: 301,
      src: "/image/dessert/ciabatta/ciabatta2.jpg",
      price: 5800,
      name: "핫치킨 앤 딥치즈",
      amount: 1,
      option1: null,
      option2: null,
    }],

    cartList: [],
    cartListId: 1,
    totalPrice:0,
    orderNumber:450,
  },
  reducers: {
    setAmount: (state, action) => {
      const { id, amount } = action.payload;
      if (amount <= 0) {
        state.cartList = state.cartList.filter((e) => e.cartListid !== id);
      } else {
      const menu = state.cartList.find((e) => e.cartListid === id);
      if (menu) {
        menu.amount = amount;}
    }},
    addToCartCake: (state, action) => {
      const product = state.cakeList.find(
        (e) =>e.id === Number(action.payload)
      );
    
      console.log("찾은 상품:", product);
      const exist = state.cartList.find((e)=>e.id===Number(action.payload))
      if(exist){
          exist.amount+=1;
      }else{
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
      }
    },
    addToCartCiabatta: (state, action) => {
      const product = state.ciabattaList.find(
        (e) => e.id === Number(action.payload)
      );
      const exist = state.cartList.find((e)=>e.id === Number(action.payload))
      if(exist){
          exist.amount+=1;
      }else{
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
      }
    },
    addToCartCookie: (state, action) => {
      const product = state.cookieList.find(
        (e) => e.id === Number(action.payload)
      );
      const exist = state.cartList.find((e)=>e.id === Number(action.payload))
      if(exist){
          exist.amount +=1;
      }else{
      const newCart = { ...product, cartListid: state.cartListId };
      state.cartList.push(newCart);
      state.cartListId++;
      }
    }, 
    removeList: (state, action) => {
      state.cartList = state.cartList.filter(
        (e) => e.cartListid !== Number(action.payload)
      );
    },
    clearCart: (state) => {
      state.cartList = [];
      state.cartListId = 0;
      state.totalPrice = 0;
    },
    setOptionCoffee: (state, action) => {
      const { id, _option1, _option2 } = action.payload;
      const menu = state.coffeeList.find((e) => e.id === Number(id));
      if (menu) {
        const existing = state.cartList.find((item) =>
          item.name === menu.name && item.option1 === _option1 && item.option2 === _option2
        );
        if(existing){
          existing.amount+=1;
        }else{
        
        const newMenu = { ...menu, option1: _option1, option2: _option2 };
        const newCart = { ...newMenu, cartListid: state.cartListId };
        state.cartListId++;
        state.cartList.push(newCart);
        }
      }
    },
    setOptionNoncoffee: (state, action) => {
        const { id, _option1, _option2 } = action.payload;
        const menu = state.nonCoffeeList.find((e) => e.id === Number(id));
        if (menu) {
          const existing = state.cartList.find((item) =>
            item.name === menu.name && item.option1 === _option1 && item.option2 === _option2
          );
          if(existing){
            existing.amount+=1;
          }else{
          
            const newMenu = { ...menu, option1: _option1, option2: _option2 };
            const newCart = { ...newMenu, cartListid: state.cartListId };
          state.cartListId++;
          state.cartList.push(newCart);
          }
        }
      },
      setOptionSmoothie: (state, action) => {
        const { id, _option1, _option2 } = action.payload;
        const menu = state.smoothieList.find((e) => e.id === Number(id));
        if (menu) {
          const existing = state.cartList.find((item) =>
            item.name === menu.name && item.option1 === _option1 && item.option2 === _option2
          );
          if(existing){
            existing.amount+=1;
          }else{
          
            const newMenu = { ...menu, option1: _option1, option2: _option2 };
            const newCart = { ...newMenu, cartListid: state.cartListId };
          state.cartListId++;
          state.cartList.push(newCart);
          }
        }
      },
      countTotalPrice:(state)=>{
        let result =0;
        for(let i of state.cartList){
          result += i.amount*i.price;
        }
        state.totalPrice = result;
      },
      addPoint:(state,action)=>{
        const vip = state.vipList.find((e)=>e.phone===action.payload)
        if (vip) {
          vip.point += state.totalPrice * 0.1;
        }
      },
      setPoint:(state,action)=>{
        const { _phone , _point } = action.payload;
        const vip = state.vipList.find((e)=>e.phone===_phone)
        if(vip){
        vip.point -= _point;
        state.totalPrice -= _point;
      }
    },
      setOrderNumber:(state)=>{
        state.orderNumber+=1;
      },
      bestSeller: (state)=>{
        for(let i = 0; i < state.cartList.length; i++){
          state.soldList.push(state.cartList[i])
          let bestMenu =  state.soldList.sort((a,b)=> b.amount - a.amount).slice(0,1);
          state.bestMenu=bestMenu;
        }
      }  
      
  },
});
export const { bestSeller,setAmount,setOrderNumber,addPoint,countTotalPrice,setPoint, addToCartCake, addToCartCookie, addToCartCiabatta, setOptionCoffee, setOptionNoncoffee, setOptionSmoothie, removeList, clearCart, setOption } =
  mainSlice.actions;
export default mainSlice;
