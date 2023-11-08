import Sequelize, { Model } from 'sequelize'

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Título precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        price: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Preço precisa ser um número.',
            },
          },
        },
        amount: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Quantidade precisa ser um número inteiro.',
            },
          },
        },
        variants: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'As variações precisam ter entre 3 e 255 caracteres.',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'products',
      },
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' })
    this.hasMany(models.Picture, { foreignKey: 'product_id' })
  }
}
