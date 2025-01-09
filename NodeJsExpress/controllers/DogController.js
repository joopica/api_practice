import DogModel from '../models/Dog.js';

const DogController = {
    getDog: (req, res) => {
        const {
            dog: { dogId },
        } = req;

        DogModel.findDog({ id: dogId })
            .then((dog) => {
                return res.status(200).json({
                    status: true,
                    data: dog.toJSON(),
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    status: false,
                    error: e,
                });
            });
    },

    updateDog: (req, res) => {
        const {
            dog: { dogId },
            body: payload,
        } = req;

        if (!Object.keys(payload).length) {
            return res.status(400).json({
                status: false,
                error: {
                    message: "Empty payload. Update Failed.",
                },
            });
        }

        DogModel.updateDog({ id: dogId }, payload)
            .then(() => {
                return Dog.findDog({ id: dogId });
            })
            .then((dog) => {
                return res.status(200).json({
                    status: true,
                    data: dog.toJSON(),
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    status: false,
                    error: e,
                });
            });
    },

    addDog: (req, res) => {
        const { body } = req;

        DogModel.createDog(body)
            .then((dog) => {
                return res.status(200).json({
                    status: true,
                    data: dog.toJSON(),
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    status: false,
                    error: e,
                });
            });
    },

    deleteDog: (req, res) => {
        const {
            params: { userId },
        } = req;

        DogModel.deleteDog({ id: dogId })
            .then((numberOfEntriesDeleted) => {
                return res.status(200).json({
                    status: true,
                    data: {
                        numberOfDogsDeleted: numberOfEntriesDeleted,
                    },
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    status: false,
                    error: e,
                });
            });
    },

    getAllDogs: (req, res) => {
        DogModel.findAllDogs(req.query)
            .then((dogs) => {
                return res.status(200).json({
                    status: true,
                    data: dogs,
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    status: false,
                    error: e,
                });
            });
    }
}

export default DogController;