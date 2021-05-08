const seedApi = require('./seed');
5
function iFarmApi(app) {
    seedApi(app);
}

module.exports = iFarmApi;