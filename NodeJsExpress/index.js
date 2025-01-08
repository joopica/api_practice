import express from 'express';

const app = express();
app.use(express.jsons());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server listening on PORT:', PORT)
});

app.get('/dogs', (req, res) => {
    const dogs = {
        "cola": "cute"
    };

    res.send(dogs);
});