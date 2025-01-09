import Ajv from 'ajv';

const AJV_OPTS = { allErrors: true };

const SchemaValidationMiddleware = {

    verify: (schema) => {
        if (!schema) {
            throw new Error('Schema not provided');
        }

        return (req, res, next) => {
            const { body } = req;

            const ajv = new Ajv(AJV_OPTS);
            const validate = ajv.compile(schema);
            const isValid = validate(body);

            if (isValid) {
                return next();
            }

            return res.send({
                status: false,
                error: {
                    message: `Invalid payload: ${ajv.errorsText(validate.errors)}`
                }
            });
        }
    }
};

export default SchemaValidationMiddleware;