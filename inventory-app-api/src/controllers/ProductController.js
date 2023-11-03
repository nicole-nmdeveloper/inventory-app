/* eslint-disable camelcase */
import Product from '../models/Product'

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      attributes: ['id', 'title', 'price', 'amount', 'variants', 'user_id'],
      order: [['id', 'DESC']],
    })

    return res.json(products)
  }

  async store(req, res) {
    try {
      const { title, price, amount, variants } = req.body

      const product = await Product.create({
        title,
        price,
        amount,
        variants,
        user_id: req.userId,
      })

      return res.json(product)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        })
      }

      const product = await Product.findByPk(id, {
        attributes: ['id', 'title', 'price', 'amount', 'variants'],
        order: [['id', 'DESC']],
      })

      if (!product) {
        return res.status(400).json({
          errors: ['Produto inexistente.'],
        })
      }

      return res.json(product)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        })
      }

      const product = await Product.findByPk(id)

      if (!product) {
        return res.status(400).json({
          errors: ['Produto inexistente.'],
        })
      }

      const productUpdated = await product.update(req.body)

      return res.json(productUpdated)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID.'],
        })
      }

      const product = await Product.findByPk(id)

      if (!product) {
        return res.status(400).json({
          errors: ['Produto inexistente.'],
        })
      }

      await product.destroy()

      return res.json({
        deleted: true,
      })
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }
}

export default new ProductController()
