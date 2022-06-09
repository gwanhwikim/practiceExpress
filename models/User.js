
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        uuid : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'uuid'
          },
        userId : {
            type: DataTypes.STRING(32),
            allowNull: false,
            field: 'user_id'
          },
        password : {
            type: DataTypes.STRING(32),
            allowNull: false,
            field: 'password'
          },
        name : {
          type: DataTypes.STRING(32),
          allowNull : false,
          field: 'name'
        },
        phoneNumber : {
          type : DataTypes.STRING(32),
          allowNull : false,
          field : phone_number
        },
        email : {
          type : DataTypes.STRING(128),
          allowNull : false,
          field : 'email'
        }

    })
}