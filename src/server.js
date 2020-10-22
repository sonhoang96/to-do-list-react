var express = require('express');
var routes = require('./api/routes');
    app = express()
    port = process.env.PORT || 3010
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    routes = require('./api/routes')
    cors = require('cors');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(
    'mongodb+srv://sonhoang96:o5coLrcpiUKTwmBQ@cluster0.qmikx.azure.mongodb.net/test?authSource=admin&replicaSet=atlas-e91qbz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    function(err){
        if(err) console.log(err)
        console.log('Server is ready');
    }
)

routes(app);

app.listen(port);
console.log('Port is running......');