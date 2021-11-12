import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constanst';
export const addtoCart=(data)=>{
  console.log("action",data);
  return{
      type:ADD_TO_CART,
      data:data
  }
}
export const removefromcart=(data)=>{
  return{
    type:REMOVE_FROM_CART,
    data:data
  }
}