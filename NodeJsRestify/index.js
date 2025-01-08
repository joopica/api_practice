import restify from 'restify'

const data = [
    {
        name: "cola",
        breed: "toy poodle"
    },
    {
        name: "mocha",
        breed: "raccoon"
    }
]

let server = restify.createServer();

function sendInfo(req, res, next) {
    let dogname = req.params.dogname;

    for (let i=0; i<data.length; i++) {
        if (dogname == data[i].name) {
            res.send(data[i]);
        }
    }
}

server.get('/:dogname', sendInfo);

server.listen(8080, function () {
    console.log("server is listening on port 8080")
});