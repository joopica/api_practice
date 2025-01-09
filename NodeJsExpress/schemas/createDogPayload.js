const createDogPayload = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        age: {
            type: 'number'
        },
        breed: {
            type: 'string',
        },
    },
    additionalProperties: false
};

export default createDogPayload;