import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"



export const getServerData = async (dispatch)=>{

 dispatch({type:FETCH_REQUEST})

 try{
    const response = await axios.get("http://localhost:3000/products");
    dispatch({type:FETCH_SUCCESS,payload:response.data})
 }catch(error){
    dispatch({type:FETCH_FAILURE})
    console.log(error);
 }
}