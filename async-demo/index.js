// console.log("Before...");
// console.log(getUser(1));
// console.log("After...");

// function getUser(id){
//     setTimeout((id)=>{
//         console.log("Reading a user from DB...");
//         return {"id": id, "GithubUser": "Ataa00"};
//     }, 2000);
// }
//-------------------------------------------------------
//Using Callbacks:
// console.log("Before...");
// getUser(1, (user)=>{
//     console.log("User: ", user);
// });
// console.log("After...");

// function getUser(id, callback){ 
//     setTimeout(()=>{
//         console.log("Reading a user from DB...");
//         callback({"id": id, "GithubUser": "Ataa00"});
//     }, 2000);
// }
//----------------------------------------------------- 
//Exercise
// console.log("Before...");
// getUser(1, (user)=>{
//     console.log("User: ", user);
//     getRepositories(user.GithubUser, (repoList)=>{
//         console.log(`${user.GithubUser} repo:` ,repoList);
//     });
// });
// console.log("After...");

// function getUser(id, callback){ 
//     setTimeout(()=>{
//         console.log("Reading a user from DB...");
//         callback({"id": id, "GithubUser": "Ataa00"});
//     }, 2000);
// }

// function getRepositories(userName, callback){
//     setTimeout(()=>{
//         console.log("Calling GitHub API...");
//         callback(['repo1', 'repo2', 'repo3', 'repo4'])
//     }, 2000)
// }
//----------------------------------------------------------
// //Async implementation
// console.log("Before...");
// getUser(1, (user)=>{
//     getRepositories(user.GithubUser, (repoList)=>{
//         getCommits(repo, (commits)=>{
//             //Callback hell.....
//         });
//     });
// });
// console.log("After");

// //Sync Implementation
// console.log("Before...");
// const user = getUser(1);
// const repos = getRepositories(user);
// const commits = getCommits(repos[0]);
// console.log("After");
//
//Sync code more redable than async code.
//------------------------------------------------------
//Solution
// console.log("Before...");
// getUser(1, getRepositories);
// console.log("After...");

// function getCommits(repos, callback){
//     displayCommits(repos[0], displayCommits);
//      setTimeout(()=>{
//      console.log("Calling GitHub API...");
//      callback(["commit"]);
// }, 2000);
// }

// function displayCommits(commits){
//     console.log(commits);
// }

// function getUser(id, callback){ 
//     setTimeout(()=>{
//         console.log("Reading a user from DB...");
//         callback({"id": id, "GithubUser": "Ataa00"});
//     }, 2000);
// }

// function getRepositories(userName, callback){
//     getRepositories(userName, getCommits);
//     setTimeout(()=>{
//         console.log("Calling GitHub API...");
//         callback(['repo1', 'repo2', 'repo3', 'repo4'])
//     }, 2000)
// }
//-----------------------------------------------------------