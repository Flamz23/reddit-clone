var snoowrap = require('snoowrap');
var credentials = require('./cred.json') // import credentials

const requester = new snoowrap({
    userAgent: credentials.userAgent,
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
    username: credentials.username,
    password: credentials.password
});

var loader = {};

loader.initialialize = async function (number) {
    let ret = []; // create return array
    var postTitles = await requester.getHot().map(post => post.title).then(titles => { return titles }); // get hot post titles

    for (var i = 0; i < number; i++) {
        ret.push({
            author: postTitles[i % postTitles.length],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
        })
    }

    return ret;
}

export default loader






// const getPosts = (number) => {
//     // const names = await p;
//     var names = [
//         "Matt Maribojoc",
//         "Lebron James",
//         "Bill Gates",
//         "Childish Gambino",
//     ];
//     let ret = []
//     for (var i = 0; i < number; i++) {
//         ret.push({
//             author: names[i % names.length],
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
//         })
//     }
//     return ret
// }

// requester.getHot().map(post => post.title).then(console.log);
// const p = requester.getHot().map(post => post.title).then(titles => { return titles });
// console.log(p);