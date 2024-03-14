import axios from 'axios';

const url="http://localhost:3000/";

export async function getProduct(endpoint){
    const {data} = await axios.get(url+endpoint)
    return data;
}