const express = require ('express')

let router = express.Router();

router.get('/',(req,res)=>{
    const {user} = req
    
    if(user){
       
        let data={
            displayName: user.displayName,
            id: user.id,
            imageURL: user.photos[0].value,
            provider: user.provider
        }
        return res.json(data)
    }
    res.sendStatus(401)
})

module.exports=router;