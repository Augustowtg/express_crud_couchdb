const couch = require('../database/connection')


const listDatabases = (req, res, next) => {
    couch.listDatabases().then(dbs => {
        return res.status(200).json({ message: dbs })
    }
        , err => {
        // request error occured
    });
}

module.exports = {
    listDatabases
}