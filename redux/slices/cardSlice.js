import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import axios from "axios";
import detailApi from '../../Components/detailApi.json'


// export const asynfirst = () =>{
//     const [data, setData] = useState();
//     const [error, setError] = useState("");
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() =>{
//         const fetchHospitalData = async () =>{
//             try {
//                 const response = await axios.get(detailApi);
//                 const json = await response.json();

//                 setData(response.data);
//             }catch(error){
//                 setError(error);
//             }finally{
//                 setLoaded(true)
//             }
//         }
//         fetchHospitalData();
//     },[])
//     return { data, error, loaded }
// }

// const cardSlice = createSlice({
//     name: 'hospitals',
//     initialState: {hospitals: 0},
//     reducers: {
       
//     }
//  })

//  export default cardSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHospitalData = createAsyncThunk(
    async (fetchHospitalDataPayload, thunkAPI)=>{
        try{
           const detailData =  await axios.get(
                "http://localhost:3000/detailData"
            )
            console.log(detailData)
            return detailData;
        }catch({response}){
            return thunkAPI.rejectWithValue({error: "Error getting data"})
        }
    }
)

const cardSlice = createSlice({
    name: 'hospitals',
    initialState: {
        hospitalData: {},
        loading: "FETCH_HOSPITAL_DATA",
        error: "",
        success: "",
    },
    reducers:{

    },
    extraReducers:{
        [fetchHospitalData.pending]: (state) =>{
            state.hospitalData = {};
            delete state.error;
            delete state.success;
            state.loading = "FETCH_HOSPITAL_DATA"; 
        },
        [fetchHospitalData.fulfilled]: (state, action) =>{
            state.success = "FETCH_HOSPITAL_DATA";
            // state.hospitalData = action.payload;
            delete state.loading;
            delete state.error;
            console.log()
        },
        [fetchHospitalData.rejected]: (state, {payload}) => {
            state.error ={
                errorType: "FETCH_HOSPITAL_DATA",
                errorMessage: payload?.error
            };
            delete state.loading
        }

    }
})            
export default cardSlice.reducer;