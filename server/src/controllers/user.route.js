const express = require('express');
const faker = require('faker');
const { User } = require('../models/user.model');

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    User.signUp(name, email, password)
    .then(user => res.send({ success: true, user }))
    .catch(res.onError);
});

userRouter.post('/signin', (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => res.send({ success: true, user }))
    .catch(res.onError);
});

userRouter.get('/check', (req, res) => {
    User.checkSignInStatus(req.headers.token)
    .then(user => res.send({ success: true, user }))
    .catch(res.onError);
});

module.exports = { userRouter };

// for(let i = 0; i < 10; i++) {
//     User.signUp(faker.name.findName(), faker.internet.email(), '123');
// }
