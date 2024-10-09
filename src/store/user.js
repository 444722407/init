import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfoStore',{
    state:()=>{
        return {
            userInfo:{}
        }
    },
    getter:{
        userAvatr:(state)=>{
            return state.userInfo.avatar
        },
        userToken:(state)=>{
            return state.userInfo.token
        }
    }
})