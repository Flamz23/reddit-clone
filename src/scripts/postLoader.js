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
    let req = requester.getHot().then(res => { return res });
    let ret = await req;

    // loop through post array, if defined fill icon url property
    try {
        for (let i = 0; i < ret.length; i++) {
            if (typeof ret[i].subreddit_name_prefixed !== "undefined") {
                let icoRequest = this.getSubredditIcon(ret[i].subreddit_name_prefixed);
                ret[i].subreddit_SubIcon = await icoRequest;
            } else {
                ret[i].subreddit_SubIcon = "";
            }
        }
    } catch (error) {
        console.error(error)
    }
    return ret;
}

loader.getSubredditIcon = async function (name) {
    let ret = axios
        .get(
            `https://www.reddit.com/${name}/about.json`
        )
        .then((res) => {
            return res.data.data.icon_img;
        });
    return await ret;
}

loader.getSubscriptions = async function () {
    let ret = requester.getSubscriptions().fetchAll();
    return ret
}

export default loader