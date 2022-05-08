const Express = require('express')
require('dotenv').config()
const couch = require('./database/connection')
const app = Express()

app.use(Express.json())

require('./controllers/userController')(app)
require('./controllers/databaController')(app)


app.listen(3000, () => {
    return console.log('APP TA FUNCIONANDO')
})


app.get('/', (req, res) => {
    const mangoQuery = {selector: {}
    };
    couch.mango("crud_couch", mangoQuery).then(({ data, headers, status }) => {
        res.status(200).json({ message: data.docs })
    });
})