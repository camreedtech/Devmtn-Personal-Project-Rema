require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {signin, register, signout, userSession} = require('./controller/authCtrl');

const app = express();
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('Connected to db')
    app.set('db, db')
}).catch( err => console.log(err));

//AUTH//
app.post('/auth/signin', signin); // "could not get any response"
app.post('/auth/register', register); // "could not get any response"
app.get('/auth/signout', signout); // tested and good
app.get('/auth/user_session', userSession); // tested and good 

//HOME/VOCAB-VIEW//
app.get('/api/words'); //store all words on redux // shows html & 'cannot GET /api/study' probably cuz there's nothing in table

//STUDY-VIEW//
app.get('/api/study') //same as above
app.post('/api/words/:id') //shows html & 'cannot POST /api/words
app.delete('/api/words/:id') // shows html & 'cannot DELETE /api/words

const port = 4500;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));