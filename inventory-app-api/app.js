import dotenv from 'dotenv'
import express from 'express'
import { resolve } from 'path'

import './src/database'
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import productRoutes from './src/routes/productRoutes'
import pictureRoutes from './src/routes/pictureRoutes'

dotenv.config()

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(__dirname, 'uploads')))
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users/', userRoutes)
    this.app.use('/tokens/', tokenRoutes)
    this.app.use('/products/', productRoutes)
    this.app.use('/pictures/', pictureRoutes)
  }
}

export default new App().app
