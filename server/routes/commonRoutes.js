const request = require('request');
const ip = require('ip').address();
const clientConfig = require('../config.json');
const packageJson = require('../package.json');

module.exports = function (app) {
    //application ping IP
    app.get('/api/health', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        const responseData = {
            "Environment ": clientConfig.env,
            "Instance IP address ": ip,
            "Application Version ": packageJson.version,
            "Node version ": process.version
        }
        res.status(200).send(JSON.stringify(responseData, null, 4));
    });
};