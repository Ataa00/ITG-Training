import fileSystem from "fs"

export const writeSuccessfullLog = (status, message) => {
    let date = new Date();
    
    let logMessage = `Success: ${date}\nStatus: ${status}.\nMessage: ${message}\n`;

    fileSystem.appendFile("./logs/successfullLogs.txt", 
    logMessage, 
    error => {
        if (error){
            console.log(`Error: ${error}`);
            fileSystem.writeFile("./logs/successfullLogs.txt", logMessage);         
        }
    });
}

export const writeErrorLog = (status, message) => {
    let date = new Date();
    
    let logMessage = `Error: ${date}\nStatus: ${status}.\nMessage: ${message}\n`;

    fileSystem.appendFile("./logs/errorLogs.txt", 
    logMessage, 
    error => {
        if (error){
            console.log(`Error: ${error}`);
            fileSystem.writeFile("./logs/errorLogs.txt", logMessage); 
        }
    });
}