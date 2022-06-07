const router = require('express').Router();

const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .put(addReaction);

router
    .route('/:UserId')
    .post(createThought)

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;