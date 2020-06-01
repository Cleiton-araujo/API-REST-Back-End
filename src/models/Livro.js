const { Model, DataTypes} = require('sequelize');

class Livro extends Model{

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            titulo: DataTypes.STRING,
            autor: DataTypes.STRING,

        }, {
            sequelize
        })

    }

    static associate(models){
       this.belongsToMany(models.User, { foreignKey: 'livro_id', through: 'user_livros', as: 'users'});
        
    }
}

module.exports = Livro;