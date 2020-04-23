// all the funcs that will run for the other endpoints besides AUTH
//store func that will get study words
//store func that will add a word
//store func that will get vocab words
// will need to get user id off req.session 

module.exports = {

    getAllWords: async (req,res) => { // this is for my home page 
        try {
            const db = req.app.get('db') 
            const words = await db.words.get_words // what do I want to put instead of 'Allwords'?
            res.status(200).send(words)
         } catch (error) {
            console.log('error getting words', error)
            res.status(500).send(error)
        }
    },

    getUserStudyWords: async (req, res) => { // this is for the study page
        try {
            const db = req.app.get('db')
            const {user_id} = req.session.user // is this line correct? 
            const words = await db.words.user_study_words 
            res.status(200).send(study)
        } catch  (error) {
            console.log('error getting study', error)
            res.status(500).send(error)
        }  
    },

    // getVocabWords: async (req,res) => { // this is for the vocab page
    //     try {
    //         const db = req.app.get('db')
    //         const {Allwords} = await db.words // same as above 
    //         res.status(200).send(words)
    //     } catch (error) {
    //         console.log('error getting words', error)
    //         res.status(500).send(error)
    //     }
    // },

    addWord: async (req,res) => { // this should be used from the home and vocab page
        //do I need next for this function?
        try { const db = req.app.get('db')
        const words = req.body  
        const {user_id} = req.session.user
        const words = await db.words.add_word({user_id, id}) 
        res.status(200).send(words)
        } catch (error) {
            console.log('error adding word', error)
            res.status(500).send(error)
        }
    },

    deleteWord: async (req, res) => { // this should be used from the study page
        try { 
            const db = req.app.get('db')
            const {id} = req.params
            const {user_id} = req.session.user
            const words = await db.words.delete_word({user_id, id})
            res.status(200).send(words)
        } catch (error) {
            console.log('error deleting word', error)
            res.status(500).send(error)
        }
    }


}