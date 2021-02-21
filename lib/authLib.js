import axios from 'axios'

export const authCheck= async ()=>{
     const {data} = await axios.get('/check');
     console.log("data there???====>",data)
     return data
}