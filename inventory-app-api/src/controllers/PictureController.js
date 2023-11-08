/* eslint-disable camelcase */
import multer from 'multer'

import multerConfig from '../config/multerConfig'
import Picture from '../models/Picture'

const upload = multer(multerConfig).single('picture')

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        })
      }

      try {
        if (!req.file) {
          return res.status(400).json({
            errors: ['Arquivo não enviado.'],
          })
        }

        const { originalname, filename } = req.file
        const { product_id } = req.body

        if (!product_id) {
          return res.status(400).json({
            errors: ['Faltando id.'],
          })
        }

        const picture = await Picture.create({
          originalname,
          filename,
          product_id,
        })

        return res.json(picture)
      } catch (err) {
        return res.status(400).json({
          errors: ['Produto não existe.'],
        })
      }
    })
  }
}

export default new PictureController()
