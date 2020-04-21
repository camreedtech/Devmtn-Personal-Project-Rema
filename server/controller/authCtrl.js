const bcrypt = require('bcrypt');

module.exports = {

    signin: async (req,res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        const foundUser = await db.select_user(email).catch(err => console.log(err))
        if(!foundUser.length){
            res.status(401).send('That user does not exist')
        } else {
            const matchPasswords = await bcrypt.compare(password, foundUser[0].hashed_password).catch(err => console.log(err))
            if(matchPasswords){
                req.session.user = {
                    username: foundUser[0].username, 
                    user_id: foundUser[0].user_id
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(401).send('Incorrect credentials')
            }
        }
    },

    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, email} = req.body;
        const foundUser = await db.select_user(email).catch(err => console.log(err))
        if (foundUser.length){
            res.status(409).send('That user already exists. Please sign in.')
        } else {
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, salt)
            const createdUser = await db.add_user([username, email, hashedPassword])
            req.session.user = {
                user_id: createdUser[0].user_id,
                username: createdUser[0].username
            }
            res.status(200).send(req.session.user)
        }
    },

    signout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    userSession: (req, res) => {
        console.log('hit from redux')
        res.status(200).send(req.session.user)
    }
}