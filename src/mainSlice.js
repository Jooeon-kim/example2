import { createSlice } from "@reduxjs/toolkit";
import Coffee from "./음료/Coffee/Coffee1.jpg";
import nonCoffeeList from "./음료/Latte_Ade/Ade1";

const mainSlice = createSlice({
    name:"main",
    initialState:{
        CoffeeList:[
            {id:1, src:"./음료/Coffee/Coffee1.jpg", price:2500,name:"아메리카노 HOT", amount:1 ,option1:null,option2:null,},
            {id:2, src:"./음료/Coffee/Coffee2.jpg", price:3000 ,name:"아메리카노 ICE", amount:1,option1:null,option2:null,},
            {id:3, src:"./음료/Coffee/Coffee3.jpg", price:2800 ,name:"카페라떼 HOT", amount:1,option1:null,option2:null,},
            {id:4, src:"./음료/Coffee/Coffee4.jpg", price:3300,name:"카페라떼 ICE", amount:1 ,option1:null,option2:null,},
            {id:5, src:"./음료/Coffee/Coffee5.jpg", price:3500,name:"콜드브루", amount:1 ,option1:null,option2:null,},
            {id:6, src:"./음료/Coffee/Coffee6.jpg", price:2000,name:"에스프레소", amount:1 ,option1:null,option2:null,},
        ],
        nonCoffeeList:[
            {id:1, src:"./음료/Latte_Ade/Ade1", price:2500,name:"청포도 에이드", amount:1 ,option1:null,option2:null,},
            {id:2, src:"./음료/Latte_Ade/Ade1", price:2500,name:"자몽 에이드", amount:1 ,option1:null,option2:null,},
            {id:3, src:"./음료/Latte_Ade/Ade1", price:2500,name:"레몬 에이드", amount:1 ,option1:null,option2:null,},
            {id:4, src:"./음료/Latte_Ade/Latte1", price:2500,name:"초코라떼 HOT", amount:1 ,option1:null,option2:null,},
            {id:5, src:"./음료/Latte_Ade/Latte2", price:2500,name:"초코라떼 ICE", amount:1 ,option1:null,option2:null,},
            {id:6, src:"./음료/Latte_Ade/Latte3", price:2500,name:"고구마라떼 HOT", amount:1 ,option1:null,option2:null,},
            {id:7, src:"./음료/Latte_Ade/Latte4", price:2500,name:"고구마라떼 ICE", amount:1 ,option1:null,option2:null,},
        ],
        vipList:[
            {name:"김주언", phone: "01099605629",point:1000}
        ],
        cartList:[],
        cartListId:0,
    },
    reducers:{
        setAmount:(state,action)=>{
            const { id,amount } = action.payload;
            const menu = state.cartList.find((e)=>e.id===id)
            if(menu){
                menu.amount = amount;
            }
        },
        addToCart:(state,action)=>{
            const product =state.menuList.find((e)=>e.id===Number(action.payload))
            state.cartList.push(product);
        },
        removeList:(state,action)=>{
            state.cartList=state.cartList.filter((e)=>e.id !== Number(action.payload))
        },
        clearCart:(state)=>{
            state.cartList=[];
            state.cartListId=0;
        },
        setOption:(state,action)=>{
            const { id,_option1,_option2 } = action.payload;
            const option = state.cartList.find((e)=>e.id===id)
            if(option){
                option.option1 = _option1;
                option.option2 = _option2;
            }
        },
        addVip:(state , action)=>{
            const {_name, _phone} = action.payload;
            state.vipList.push({name:_name , phone:_phone,point:0})
        },
       
    
}});
export const {setAmount,addToCart,removeList,clearCart,setOption}=mainSlice.actions;
export default mainSlice;