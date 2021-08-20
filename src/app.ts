import express from 'express'
import config from 'config'
import log from './logger'
import connect from './db/connect'
import routes from './routes/index'
const port = config.get('port') as number;
const host = config.get('host') as string;


const app =  express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, () =>{
    log.info(`Server listening at ${host} on ${port}`)
    connect()

    routes(app)
})