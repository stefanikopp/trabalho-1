const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')
const Pedido = require('./pedido.model');
const Produto = require('./produto.model');

const PedidosProdutos = sequelize.define('pedidos_produtos', {
  quantidade: {
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produto,
        key: 'id'
      }
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pedido,
        key: 'id'
      }
    },
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, 
{ 
  underscored: true,
  timestamps: false 
}
);

module.exports = PedidosProdutos