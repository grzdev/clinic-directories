import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import detailsApi from '../Components/detailsApi'

const hospitalData = detailsApi

export function fetchHospitalData(){
    return(dispatch)=>{
        return axios.get(hospitalData), then((response)=>{
            dispatch(GET_DATA(response.data.id))
        })
    }
}


const cardSlice = createSlice({
    name: 'hospitals',
    initialState: []
})


export default cardSlice.reducer;