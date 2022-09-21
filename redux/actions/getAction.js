import axios from "axios";

export default function getAction(){
    return(dispatch)=>{
        return axios.get("detailsApi.json"), then((response)=>{
            dispatch(getHospital('#' + response.detailData.id));
        })
    }
}

export function getHospital(id){
    return{
        type: 'GET_HOSPITAL',
        hospital: hospital
    }
}