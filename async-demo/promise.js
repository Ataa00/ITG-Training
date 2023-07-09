// const p = new Promise((resolve, reject) => {
//     console.log("Before...");
//     // resolve(1);
//     setTimeout(() => {
//         reject(new Error("Error message"));
//     }, 2000);
//     console.log("After...");
// });

// p.then(result => console.log("Result: ", result)).catch(reject => console.log(reject.message));
//------------------------------------------------------------------------------------------------
console.log("Before...");

// getUser(1, getRepositories);

//Callbacks...
// getUser(1, (user)=>{
//     getRepositories(user.GithubUser, (repoList)=>{
//         getCommits(repo, (commits)=>{
//             //Callback hell.....
//         });
//     });
// });

// //Promises...
// getUser(1)
//     .then(user => getRepositories(user))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("Commits: ", commits))
//     .catch(error => console.log(error.message));
// console.log("After...");

// function getCommits(repos){
//     return new Promise((resolve, reject) =>{
//             setTimeout(()=>{
//             console.log("Calling GitHub API...");
//             resolve(["commit"]);
//         }, 2000);
//     });
// }

// function displayCommits(commits){
//     console.log(commits);
// }

// function getUser(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Reading a user from DB...");
//             resolve({"id": id, "GithubUser": "Ataa00"});
//         }, 2000);
//     });
// }

// function getRepositories(userName){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Calling GitHub API...");
//             resolve(['repo1', 'repo2', 'repo3', 'repo4'])
//         }, 2000);
//     });
// }