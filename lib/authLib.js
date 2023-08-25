import axios from 'axios'

export const authCheck= async ()=>{
     const {data} = await axios.get('/check');
     return data
}