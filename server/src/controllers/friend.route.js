const express = require('express');
const { Friend } = require('../models/friend.model');
const { mustBeUser } = require('./user.middleware');

const friendRouter = express.Router();

friendRouter.use(mustBeUser);

friendRouter.get('/', (req, res) => {
    Friend.getUsers(req.idUser)
    .then(people => res.send({ success: true, people }))
    .catch(res.onError);
})

friendRouter.post('/request/:idReceiver', (req, res) => {
    Friend.sendFriendRequest(req.idUser, req.params.idReceiver)
    .then(receiver => res.send({ success: true, receiver }))
    .catch(res.onError);
});

friendRouter.post('/cancel/:idReceiver', (req, res) => {
    Friend.removeFriendRequest(req.idUser, req.params.idReceiver)
    .then(receiver => res.send({ success: true, receiver }))
    .catch(res.onError);
});

friendRouter.post('/accept/:idSender', (req, res) => {
    Friend.acceptRequest(req.idUser, req.params.idSender)
    .then(friend => res.send({ success: true, friend }))
    .catch(res.onError);
});

friendRouter.post('/decline/:idSender', (req, res) => {
    Friend.declineRequest(req.idUser, req.params.idSender)
    .then(requestor => res.send({ success: true, requestor }))
    .catch(res.onError);
});

friendRouter.post('/remove/:idFriend', (req, res) => {
    Friend.removeFriend(req.idUser, req.params.idFriend)
    .then(friend => res.send({ success: true, friend }))
    .catch(res.onError);
});

module.exports = { friendRouter };
