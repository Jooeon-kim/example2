import { createSlice } from "@reduxjs/toolkit";
import notebook from "./img/노트북.webp"
import tab from "./img/태블릿.webp"
import hand from "./img/핸드폰.webp"
const mainSlice = createSlice({
    name:"main",
    initialState:{
        menuList:[
            {id:1, src:notebook, price:1000,name:"노트북", amount:1 ,option1:null,option2:null,},
            {id:2, src:tab, price:1200 ,name:"태블릿", amount:1,option1:null,option2:null,},
            {id:3, src:hand,price:1500 ,name:"핸드폰", amount:1,option1:null,option2:null,},
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