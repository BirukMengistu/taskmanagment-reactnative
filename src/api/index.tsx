import React,{useState} from "react"
import { UserInfo } from "../../App"
import axios from "axios"
const getFetchData=  async (searchuser:string)=>{
  try{
    const {data} = await axios.get(`https://api.github.com/users/${searchuser}`)
                                   
    return  data
  } 
   catch (error:any) {
    console.error(error.message);
}
 
}

export{
    getFetchData
}