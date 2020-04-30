const bcrypt = require('bcrypt');
// const {v4} = require('uuid');

module.exports = {

    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { name, email, password, admin, id } = req.body
    
            let users = await db.auth.select_user(email)
            let user = users[0]
            
            if (user) {
                return res.status(409).send('email already exists')
            }
            
            // if (admin) {
            //     id = v4()
            // }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.auth.create_user({ name, email, hash, admin, id })
            let newUser = response[0]
    
            delete newUser.password
    
            req.session.user = newUser
            res.send(req.session.user)
            
        } catch (error) {
            console.log('error', error)
            res.status(500).send(error)
        }
    },
    signin: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { email, password } = req.body

            let users = await db.auth.select_user(email)
            let user = users[0]
    
            if (!user) {
                return res.status(401).send('email or password incorrect')
            }

            let isAuthenticated = bcrypt.compareSync(password, user.password)

            if (!isAuthenticated) {
                return res.status(401).send('email or password incorrect')
            }

            
            delete user.password
            req.session.user = user
            res.send(req.session.user)
            
        } catch (error) {
            console.log('there was an error', error)
            res.status(500).send(error)
        }

    },

    // signin: async (req,res) => {
    //     const db = req.app.get('db');
    //     const {email, password} = req.body;
    //     const foundUser = await db.select_user(email).catch(err => console.log(err))
    //     if(!foundUser.length){
    //         res.status(401).send('That user does not exist')
    //     } else {
    //         const matchPasswords = await bcrypt.compare(password, foundUser[0].hashed_password).catch(err => console.log(err))
    //         if(matchPasswords){
    //             req.session.user = {
    //                 username: foundUser[0].username, 
    //                 user_id: foundUser[0].user_id
    //             }
    //             res.status(200).send(req.session.user)
    //         } else {
    //             res.status(401).send('Incorrect credentials')
    //         }
    //     }
    // },

    // register: async (req, res) => {
    //     const db = req.app.get('db');
    //     const {username, password, email} = req.body;
    //     const foundUser = await db.select_user(email).catch(err => console.log(err))
    //     if (foundUser.length){
    //         res.status(409).send('That user already exists. Please sign in.')
    //     } else {
    //         const saltRounds = 12;
    //         const salt = await bcrypt.genSalt(saltRounds)
    //         const hashedPassword = await bcrypt.hash(password, salt)
    //         const createdUser = await db.add_user([username, email, hashedPassword])
    //         req.session.user = {
    //             user_id: createdUser[0].user_id,
    //             username: createdUser[0].username
    //         }
    //         res.status(200).send(req.session.user)
    //     }
    // },

    signout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    userSession: (req, res) => {
        console.log('hit from redux')
        res.status(200).send(req.session.user)
    }
}