import { Express, Request, Response } from "express";
import authRoutes from './auth'

export default (app: Express) => {
    app.use('/', authRoutes)
}