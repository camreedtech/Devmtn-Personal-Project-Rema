require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {signin, register, signout, userSession, updatePassword} = require('./controller/authCtrl');
const {getAllWords, getUserStudyWords, addWord, deleteWord} = require('./controller/wordsCrtl');

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
    app.set('db', db)
}).catch( err => console.log(err));

//AUTH//
app.post('/auth/signin', signin); // tested and good
app.post('/auth/register', register); // 500 ISE, blank object
app.get('/auth/signout', signout); // tested and good
app.get('/auth/user_session', userSession); // tested and good 
app.put('/auth/update_password', updatePassword); // 500 ISE, blank object

//HOME/VOCAB-VIEW//
app.get('/api/words', getAllWords); // returned  "code": "ERR_INVALID_ARG_TYPE"

//STUDY-VIEW//
app.get('/api/study', getUserStudyWords) // 500 ISE, blank object
app.post('/api/words/:id', addWord) // 404 not found, shows html & 'cannot POST /api/words
app.delete('/api/words/:id', deleteWord) // 404 not found, shows html & 'cannot DELETE /api/words

const port = 4500;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));