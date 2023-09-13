const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI,{
    // userNewUrlParser: true,
    // userUnifiedTopology: true
}).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
        fakeDb.seeDb()
    }
)

// async 
//     await mongoose.connect(config.DB_URI,{
//     userNewUrlParser: true,
//     userUnifiedTopology: true
//     })
//     .then(
//         () => {
//             const FakeDb = new FakeDb()
//             fakeDb.seeDb()
//         }
//     )




const app = express()

app.use('/api/v1/products', productRoutes)



const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running!')
}
)

