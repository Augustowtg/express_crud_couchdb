const NodeCouchDb = require('node-couchdb');

// not admin party
const couch = new NodeCouchDb({
    auth: {
        user: process.env.DATABASE_USER,
        pass: process.env.DATABASE_PASSWORD
    }
})

module.exports = couch