const couch = require('../database/connection')

const listUsers = (req, res, next) => {
    const dbName = "crud_couch";
    const mangoQuery = {
        selector: {}
    };
    const parameters = {};

    couch.mango(dbName, mangoQuery, parameters).then(({ data, headers, status }) => {
        res.status(200).json({ message: data.docs })
    }, err => {
        res.status(400).json({ error: err })
    });
}

const createUser = async (req, res, next) => {
    const { name, password } = req.body;

    await couch.insert("crud_couch", {
        _id: name,
        password: password
    }).then(({ data, headers, status }) => {
        res.status(200).json({ message: data })
    }, err => {
        res.status(400).json({ err: err })
    });
}

const updateUser = (req, res, next) => {

    const id = req.body.id;
    const rev = req.body.rev;

    const { name, password } = req.body;

    couch.update("crud_couch", {
        _id: id,
        _rev: rev,
        name: name,
        password: password,

    }).then(({ data, headers, status }) => {
        res.status(200).json({ message: data })
    }).catch((err) => {
        res.status(400).json({ error: err })
    })

}

const deleteUser = (req, res, next) => {
    const id = req.params.id;
    const rev = req.params.rev;

    couch.del("crud_couch", id, rev).then(({ data, headers, status }) => {
        res.status(200).json({ message: data })
    }).catch((err) => {
        res.status(400).json({ err: err })
    })

}

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser
}