const updateDogPayload = {
    type: 'object',
    properties: {
        age: {
            type: 'number'
        },
        breed: {
            type: 'string'
        },
    },
    additionalProperties: false
};

export default updateDogPayload;