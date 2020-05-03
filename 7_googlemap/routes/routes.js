const locationRoutes = require('./location');

const path = require('path');

const appRouter = (app, fs) => {

    app.get('/', (req, res) =>{
        console.log(`New connection Open..`);

        // res.send('welcome to the development api-server');
        res.sendFile(path.join(__dirname + './../index.html'));
        // locationRoutes(app, fs);


    });

    locationRoutes(app, fs);
};

module.exports = appRouter;
