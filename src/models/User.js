const { Model, DataTypes} = require('sequelize');

class User extends Model{

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,

        }, {
            sequelize
        })
        
    }
    static associate(models){
        this.hasMany(models.Emprestimo, { foreignKey: 'user_id', as: 'emprestimos'});
        this.belongsToMany(models.Livro, { foreignKey: 'user_id', through: 'user_livros', as: 'livros'});
    } 
}

module.exports = User;