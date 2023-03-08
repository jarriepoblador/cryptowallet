import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRoute from './src/route/userRoute.js';
import walletRoute from './src/route/walletRoute.js';
import transactionRoute from './src/route/transactionRoute.js';

const app = express();
mongoose.set('strictQuery', true);

const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoute(app);
walletRoute(app);
transactionRoute(app);

app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});


