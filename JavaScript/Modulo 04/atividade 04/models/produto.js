module.exports =(sequelize, DataTypes) => {
    const porduto = sequelize.define('produto', {
        name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        preco:{
            type:DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        descricao:{
            type:DataTypes.TEXT,
            allowNull:true
        }
    })

    return produto;
};