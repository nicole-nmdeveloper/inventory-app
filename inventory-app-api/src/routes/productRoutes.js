import { Router } from 'express'

import productController from '../controllers/ProductController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', loginRequired, productController.index)
router.post('/', loginRequired, productController.store)
router.get('/:id', loginRequired, productController.show)
router.put('/:id', loginRequired, productController.update)
router.delete('/:id', loginRequired, productController.delete)

export default router
