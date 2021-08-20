import express from 'express'
import { Express, Request, Response } from 'express'
const router =  express.Router()

router.get('/test', (req:Request, res:Response) =>{
    res.sendStatus(200)
})

//Register

//login



export default router