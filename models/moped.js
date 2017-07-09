module.exports = function(sequelize, DataTypes) {
    var Build = sequelize.define("Build", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        moped_part: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        installed: {
            type: DataTypes.BOOLEAN,
            notEmpty: true,
            default: false
        }
    });
    return Build;
};