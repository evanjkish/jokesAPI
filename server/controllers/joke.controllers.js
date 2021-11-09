//CRUD HERE
const Joke = require('../models/joke.models')

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then(allDaJokes => res.json({ message: 'Success!', jokes: allDaJokes }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    findOneSingleJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(OneSingleJoke => res.json({ message: 'Success!', joke: OneSingleJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then(newlyCreatedJoke => res.json({ message: 'Success!', joke: newlyCreatedJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    updateExistingJoke: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => res.json({ message: 'Success!', joke: updatedJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    deleteAnExistingJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json({ message: 'Success!', result: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}