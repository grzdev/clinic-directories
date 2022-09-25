import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import axios from "axios";
import detailApi from '../../Components/detailApi.json'

// const [details, setDetails] = useState([])
//  useEffect(()=>{
//    const fetchHospitalData = async () => {
//         const {data: res} = await axios.get(detailsApi)
//         setDetails(res);
//     }
//     fetchHospitalData();
// }, [])

// const cardSlice = createSlice({
//     name: 'hospitals',
//     initialState: []
//  })
//  export default cardSlice.reducer;

const asynfirst = () =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        const fetchHospitalData = async () =>{
            try {
                const response = await axios.get(detailApi);
                const json = await response.json();

                setData(response.data);
            }catch(error){
                setError(error);
            }finally{
                setLoaded(true)
            }
        }
        fetchHospitalData();
    },[])
    return { data, error, loaded }
}

export default asynfirst