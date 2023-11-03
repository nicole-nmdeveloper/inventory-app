import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body)

      const { id, name, email } = newUser

      return res.json({ id, name, email })
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário inexistente.'],
        })
      }

      const userUpdated = await user.update(req.body)

      const { id, name, email } = userUpdated

      return res.json({ id, name, email })
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário inexistente.'],
        })
      }

      await user.destroy()

      return res.json(null)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      })
    }
  }
}

export default new UserController()
