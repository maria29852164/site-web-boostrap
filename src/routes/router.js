import {Router} from 'express'

const router=Router()

router.get('/',(req,res)=>{
    res.send('hellow world')
})

module.exports=router