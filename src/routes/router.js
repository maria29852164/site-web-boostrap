import {Router} from 'express'
import {home} from '../controller/controller'

const router=Router()

router.get('/',home)
module.exports=router