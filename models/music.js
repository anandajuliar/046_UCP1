module.exports = (sequelize, DataTypes) => {
    const Music = sequelize.define('Music', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama:{ //1
        type: DataTypes.STRING,
    },
    author:{ //2
        type: DataTypes.STRING,
    },
    tahunTerbit:{ //3
        type: DataTypes.INTEGER,
    },
    genre:{ //4
        type: DataTypes.STRING,
    },
    });
    return Music;
};
