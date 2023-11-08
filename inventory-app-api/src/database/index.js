import Sequelize from 'sequelize'

import databaseConfig from '../config/database'
import User from '../models/User'
import Product from '../models/Product'
import Picture from '../models/Picture'

const models = [User, Product, Picture]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
