const seedApi = require('./seed');

function iFarmApi(app) {
    seedApi(app);
}

module.exports = iFarmApi;