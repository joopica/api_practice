import express from 'express';
import { Sequelize } from 'sequelize';
import DogModel from './models/Dog.js';
import port from './config.js';
import router from './routes.js';

const PORT = process.env.PORT || port;

const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./storage/data.db",
});

DogModel.initialise(sequelize);

sequelize
    .sync()
    .then(() => {
        console.log("Sequelize Initialised!");

        app.use('/dogs', router);

        app.listen(PORT, () => {
            console.log('server listening on PORT:', PORT)
        });
    })
    .catch((e) => {
        console.error(`Sequelize initialise threw an error: ${e}`);
    });