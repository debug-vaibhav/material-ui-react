const fs = require('fs-extra');
const path = require('path');

const env = process.env.NODE_ENV;
const distPath = './dist/';
let clientConfigFile = '';
let serverConfigFile = '';

switch (env) {
    case 'stage':
        clientConfigFile = 'config.stage.json';
        serverConfigFile = 'configKeys.stage.json';
        dbConnectionFile = 'stageDbConnection.js';
        break;
    case 'production':
        clientConfigFile = 'config.prod.json';
        serverConfigFile = 'configKeys.prod.json';
        dbConnectionFile = 'prodDbConnection.js';
        break;
}


const compile = () => Promise.resolve()
    .then(() => console.log('Starting to move files...'))
    .then(() => console.log('Target application environment: ' + env))
    .then(() => {
        console.log(`Copying server config key file to dist`);
        fs.copySync(
            path.join('./config/server/' + serverConfigFile),
            path.join(distPath + 'configKeys.json')
        );
        console.log(`Copied server config key file to dist`);
    })
    .then(() => {
        console.log(`Copying db config file to dist`);
        fs.copySync(
            path.join('./config/server/' + dbConnectionFile),
            path.join(distPath + 'dbConnection.js')
        );
        console.log(`Copied db config file to dist`);
    })
    .then(() => {
        console.log(`Copying client config file to dist`);
        fs.copySync(
            path.join('./config/client/' + clientConfigFile),
            path.join(distPath + 'config.json')
        );
        console.log(`Copied client config file to dist`);
    })
    .then(() => {
        console.log(`Copying main.js file to dist main.js`);
        fs.copySync(
            path.join('./server/main.js'),
            path.join(distPath + 'main.js')
        );
        console.log(`Copied main.js file to dist main.js`);
    })
    .then(() => {
        console.log(`Copying middleware.js file to dist middleware.js`);
        fs.copySync(
            path.join('./server/middleware.js'),
            path.join(distPath + 'middleware.js')
        );
        console.log(`Copied middleware.js file to dist middleware.js`);
    })
    .then(() => {
        console.log(`Copying package.json file to dist`);
        fs.copySync(
            path.join('./server/package.json'),
            path.join(distPath + 'package.json')
        );
        console.log(`Copied package.json file to dist`);
    })
    .then(() => {
        console.log(`Copying route files to dist`);
        fs.copySync(
            path.join('./server/routes'),
            path.join(distPath + 'routes')
        );
        console.log(`Copied route files to dist`);
    })
    .then(() => {
        console.log(`Files movement successfull.`)
    })
    .catch((err) => console.log('Files helper encountered errors.', err));

compile();
