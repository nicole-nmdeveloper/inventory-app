/* eslint-disable camelcase */
import Product from '../models/Product'
import Picture from '../models/Picture'

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'title', 'price', 'amount', 'variants', 'user_id'],
      order: [
        ['id', 'DESC'],
        [Picture, 'id', 'DESC'],
      ],
      include: {
        model: Picture,
        attributes: ['url', 'originalname', 'filename'],
      },
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

      const product = await Product.findOne({
        where: {
          id,
          user_id: req.userId,
        },
        attributes: ['id', 'title', 'price', 'amount', 'variants'],
        order: [
          ['id', 'DESC'],
          [Picture, 'id', 'DESC'],
        ],
        include: {
          model: Picture,
          attributes: ['url', 'originalname', 'filename'],
        },
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

      const product = await Product.findOne({
        where: {
          id,
          user_id: req.userId,
        },
      })

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

      const product = await Product.findOne({
        where: {
          id,
          user_id: req.userId,
        },
      })

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
