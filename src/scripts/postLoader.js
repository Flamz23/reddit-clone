const snoowrap = require('snoowrap');
const axios = require('axios');
var credentials = require('./cred.json') // import credentials

const requester = new snoowrap({
    userAgent: credentials.userAgent,
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
    username: credentials.username,
    password: credentials.password
});

var loader = {};

loader.getHot = async function () {
    let ret = requester.getHot().then(res => { return res }); // get posts in hot
    return ret;
}

loader.getSubbredditIcon = async function () {
    let ret = axios
        .get(
            `https://www.reddit.com/${this.post.subreddit_name_prefixed}/about.json`
        )
        .then((res) => {
            return res.data.data.icon_img;
        });
    this.subredditicon_img = await ret;
}

export default loader