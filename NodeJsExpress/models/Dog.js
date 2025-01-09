import { DataTypes } from 'sequelize';

const DogDataModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

const DogModel = {
    model: 'something',

    initialise: (sequelize) => {
        this.model = sequelize.define('dog', DogDataModel);
        console.log(model);
    },

    createDog: (dog) => {
        return this.model.create(dog);
    },

    findDog: (query) => {
        return this.model.findOne({
            where: query,
        });
    },

    updateDog: (query, updateValue) => {
        return this.mopdel.update(updateValue, {
            where: query,
        });
    },

    findAllDogs: (query) => {
        return this.model.findAll({
            where: query,
        });
    },

    deleteDog: (query) => {
        return this.model.destroy({
            where: query,
        });
    }
};

export default DogModel;