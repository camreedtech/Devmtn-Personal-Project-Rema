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
app.post('/auth/signin', signin);
app.post('/auth/register', register);
app.get('/auth/signout', signout);
app.get('/auth/user_session', userSession); //localhost:3001/auth/user_session

//HOME/VOCAB-VIEW//
app.get('/api/words'); //store all words on redux

//STUDY-VIEW//
app.get('/api/study')
app.post('/api/words/:id')
app.delete('/api/words/:id')

// //VOCAB-VIEW//           IT'S DOING SAME THING AS HOME VIEW SO I DON'T NEED TO WRITE TWICE BUT HERE FOR REFERENCE
// app.get('/api/words'); 


const port = 4500;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));