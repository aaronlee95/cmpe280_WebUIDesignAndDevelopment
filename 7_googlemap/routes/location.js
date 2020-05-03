const path = require('path');

const locationRoutes = (app, fs) => {
    const locationPath = path.join(__dirname + '/data/myco_location.json');

    app.get('/data/myco_location', (req, res) => {
        fs.readFile(locationPath, 'utf8', (err,data) => {
            if(err){
                console.log(err);
                throw err;
            }
            // res.send(JSON.parse(data));
            res.json(JSON.parse(data));
            // console.log(JSON.parse(data));
        })
    })
}

module.exports = locationRoutes;