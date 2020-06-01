const { Model, DataTypes} = require('sequelize');

class Emprestimo extends Model{

    static init(sequelize){
        super.init({
            matricula: DataTypes.INTEGER,
            email: DataTypes.STRING,
            devolução: DataTypes.STRING,

        }, {
            sequelize
        })

    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        
    }
}

module.exports = Emprestimo;