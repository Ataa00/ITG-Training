//Callbacks...
// getUser(1, (user)=>{
//     getRepositories(user.GithubUser, (repoList)=>{
//         getCommits(repo, (commits)=>{
//             //Callback hell.....
//         });
//     });
// });
//---------------------------------------------------------
//Promises...
// getUser(1)
//     .then(user => getRepositories(user))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("Commits: ", commits))
//     .catch(error => console.log(error.message));
// console.log("After...");
//----------------------------------------------------------
//Async and Await
//It returns void because async await buit on top og promises
//When you want async and await you should use try catch in your code
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(error){
        console.log("Error: ", error.message);
    }
}

displayCommits();

function getCommits(repos){
    return new Promise((resolve, reject) =>{
            setTimeout(()=>{
            console.log("Calling GitHub API...");
            resolve(["commit"]);
        }, 2000);
    });
}

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Reading a user from DB...");
            resolve({"id": id, "GithubUser": "Ataa00"});
        }, 2000);
    });
}

function getRepositories(userName){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Calling GitHub API...");
            // resolve(['repo1', 'repo2', 'repo3', 'repo4'])
            reject(new Error("Could not return repos..."))
        }, 2000);
    });
}