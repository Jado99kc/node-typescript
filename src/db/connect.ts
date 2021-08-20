import mongoose from  'mongoose'
import config from 'config'
import log from '../logger'
import { err } from 'pino-std-serializers'

function connect(){
    const dbUri =  config.get("dbUri") as string

    return mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        log.info('Databse Connected')
    }).catch((error) =>{
        log.error('dberror: ', error)
        process.exit(1)
    })
}

export default connect