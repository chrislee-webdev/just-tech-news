const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //define an id column
        id: {
            //use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivalent of SQL's 'NOT NULL' option
            allowNull: false,
            //instruct that this is the Primary Key
            primaryKey: true,
            //turn on auto increment 
            autoIncrement: true
        },

        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate email values in this table
            unique: true,
            //if allownull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },

        //define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the password must be at least five characters long
                len: [5]
            }
        }
    },
    {
        //table configuration options go here

        //pass in imported sequelize connection
        sequelize,
        //don't automatically create createAt/updatedAt timestamp fields
        timestamps: false,
        //don't pluralize name of database table
        freezeTableName: true,
        //use underscores instaed of camel-casing
        underscored: true,
        //make it so model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;