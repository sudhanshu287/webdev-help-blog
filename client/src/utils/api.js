import axios from 'axios';

const params={
    headers:{
        Authorization:"Bearer "+import.meta.env.VITE_APP_BACKEND_API_KEY,
    },
}
// const url='/api/articles?populate=*';
export const fetchDataFromApi=async(url)=>{
    try{
        const {data}=await axios.get(import.meta.env.VITE_APP_BACKEND_URL + url, params);
        return data;
    }catch(error){
        console.log(error);
        return error;
    }
}


