const { Post } = require('../models');

const postData = [{
        title: "Is the crypto crash over?",
        content: "If you take crypto advice from a random blog on the internet, TikTok, or YouTube, you're in for a bad time",
        user_id: 1
    },
    {
        title: "Why we shouldn't let Bezos come back to earth.",
        content: "So we can take his $205,000,000,000 for ourselves.",
        user_id: 2
    },
    {
        title: "We don't like it or want it: No more planned obsolescence",
        content: "What kind of a company designs their products to break? Well a lot of them actually. Your belongings are created so that they break or become so intollerable that you go out a buy a new one. We don't want to spend thousand of dollars for something that is going to break in two years, it kills the environment and our wallets!",
        user_id: 3
    },
    {
        title: "Why Apple won't ever implement USB-C: They suck.",
        content: "Apple won't ever jump on the USB-C wagon because they would need to admit the rest of the world has a better option. They would also lose a large revenue stream by forcing people to buy their ancillary products. Sure their phones are nice, but lightning port isn't.",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;