import { API_BASE_URL } from "../../config/api"
import axios from 'axios'
import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./ActionType"

export const loginUser = (loginData) => async(dispatch) => {
    try{
        const {data} = await axios.post(`${API_BASE_URL}/auth/login`, loginData)
console.log("logedin user ", data)
        if(data.jwt){
            localStorage.clear("email");
            console.log("After clear", localStorage.getItem("jwt"))
            localStorage.setItem("email",data.jwt)
        }
        dispatch({type:LOGIN_USER_SUCCESS, payload:data.jwt})
    }catch(error){
        console.log("error",error)
        dispatch({type:LOGIN_USER_FAILURE,payload:error.message})
    }
    
}

export const registerUser = (registerData) => async(dispatch) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, registerData, {
            
            headers:{
                "Content-Type": `application/json`
            }
        })
        const { data } = response;
        console.log("signup user ", data)
        if(data.jwt){
            localStorage.clear("jwt")
            
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type:REGISTER_USER_SUCCESS, payload:data.jwt})
    }catch(error){
        console.log("error",error)
        dispatch({type:REGISTER_USER_FAILURE,payload:error.message})
    }
    
}

export const getUserProfile = (jwt) => async(dispatch) => {
    try{
        const {data} = await axios.get(`${API_BASE_URL}/users/profile`, {
            headers:{
                "Authorization": `${jwt}`
            }
        })
        console.log("getuserProfile Data: ", data)
        
        dispatch({type:GET_USER_PROFILE_SUCCESS, payload:data})
    }catch(error){
        console.log("error",error)
        dispatch({type:GET_USER_PROFILE_FAILURE,payload:error.message})
    }
    
}

export const logout = () => async(dispatch) => {
   
       localStorage.removeItem
        dispatch({type:LOGOUT, payload:null})
    
    
}