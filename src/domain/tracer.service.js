import { axios } from "../plugins/axios";

export const TracerServices ={

    async get(){
        return await axios.get("/AcessIP")
    },
    async getByGroup(){
        return await axios.get("/AcessIP/GetByGroup")
    } 

}