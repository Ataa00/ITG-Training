//Creating settled Promises

// //To call a promise that is already resoved
// const p = Promise.resolve({id : 1});
// p.then(result => console.log(result));
//-------------------------------------------------
// //To call a promise that is already rejected
// const p = Promise.reject(new Error("Rejected"));
// p.catch(error => console.log(error));
//-------------------------------------------------
// //Running promises in parallel
// const facbookAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running facbookAPI...");
//         resolve(1);
//     }, 2000);
// });

// const twitterAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running twitterAPI...");
//         resolve(2);
//     }, 2000);
// });

// Promise.all([facbookAPI, twitterAPI]).then(result => console.log(result));
//---------------------------------------------------------------------------
// //Running promises in parallel: If any of the promises is rejected all return the catch.
// const facbookAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running facbookAPI...");
//         reject(new Error("Because something..."));
//     }, 2000);
// });

// const twitterAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running twitterAPI...");
//         resolve(2);
//     }, 2000);
// });

// Promise.all([facbookAPI, twitterAPI])
// .then(result => console.log(result))
// .catch(error => console.log("Error: ", error.message));
//----------------------------------------------------------
// //Running promises in parallel: race() will resolve the first promise that fullfilled. 
// const facbookAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running facbookAPI...");
//         resolve(1);
//     }, 2000);
// });

// const twitterAPI = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log("Running twitterAPI...");
//         resolve(2);
//     }, 2000);
// });

// Promise.race([facbookAPI, twitterAPI]).then(result => console.log(result));