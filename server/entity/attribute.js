const Sequelize = require('sequelize');
const db = require('../connection/db');


const attribute = db.define('attribute', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  hp_1: {type: Sequelize.INTEGER},
  atk_1: {type: Sequelize.INTEGER},
  spd_1: {type: Sequelize.INTEGER},
  def_1: {type: Sequelize.INTEGER},
  res_1: {type: Sequelize.INTEGER},
  hp_40: {type: Sequelize.INTEGER},
  atk_40: {type: Sequelize.INTEGER},
  spd_40: {type: Sequelize.INTEGER},
  def_40: {type: Sequelize.INTEGER},
  res_40: {type: Sequelize.INTEGER},
  weapon: {type: Sequelize.INTEGER},
  sup: {type: Sequelize.INTEGER},
  kill: {type: Sequelize.INTEGER},
  a: {type: Sequelize.INTEGER},
  b: {type: Sequelize.INTEGER},
  c: {type: Sequelize.INTEGER},
}, {
  // 如果为 true 则表的名称和 model 相同，即 user
  // 为 false MySQL创建的表名称会是复数 users
  // 如果指定的表名称本就是复数形式则不变
  freezeTableName: true,
});

module.exports.attribute = attribute;