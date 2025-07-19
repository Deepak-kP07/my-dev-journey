const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feeds');

// router.get('path' , middleware ()=>{})

router.get('/posts',feedController.getpost);

router.post('/posts' , feedController.createPost);


module.exports = router ;