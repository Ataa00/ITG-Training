
async function notifyCustomer(){
  try{
      const customer = await getCustomer(1);
      console.log(customer);
    if(customer.isGold){
      const movies = await getTopMovies();
      console.log("Top movies: ", movies);
      await sendEmail(customer.email, movies);
      console.log("Email sent...");
    }
  }
  catch(error){
    console.log("Error: ", error.message);
  }
}

notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Ataa Shaqour', 
        isGold: true, 
        email: 'ataa.shaqour.as@gmail.com' 
      });
    }, 4000);  
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}