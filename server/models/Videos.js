module.exports = (sequelize, DataTypes) => {
    const Videos = sequelize.define("Videos", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Videos;
}