const { Comment } = require('../models');

const commentData = [{
        comment_text: "BTC, ETH, ALGO, and MATIC to the moon!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Let's lock Musk out too.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "The title of this article describes how everyone feels about me",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Apple doesn't suck! The interface! It's so user friendly!! REEEEEE!!!",
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;