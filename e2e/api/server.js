const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');
productRoute = require('./routes/productPage.route')



//conect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected!')},
    err => {console.log('Can not connect to DB' + err)}
);

//connect to Node.js
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/DogStore' , productRoute);
let port = process.env.PORT || 4000;

const server = app.listen(port, function(){
    console.log('Listening on port' + port)
});

