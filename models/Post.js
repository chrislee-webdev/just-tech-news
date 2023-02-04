const { Model, Datatypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {};

//create fields/coolumns for the Post model
Post.init(
    {
        id: {
            types: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: Datatypes.String,
            allowNull: false
        },

        post_url: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },

        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;