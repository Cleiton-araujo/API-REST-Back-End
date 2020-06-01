const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Emprestimo = require('../models/Emprestimo');
const Livro = require('../models/Livro');

const connection = new Sequelize(dbConfig);

User.init(connection);
Emprestimo.init(connection);
Livro.init(connection);

User.associate(connection.models);
Emprestimo.associate(connection.models);
Livro.associate(connection.models);

module.exports = connection;