import nodeMailer from "nodemailer";

const admin = {
  name: "Ataa Shaqour",
  email: "myrtis.maggio12@ethereal.email",
  password: "tnbK8GGGfRqkjP2gMb"
}

const user = {
  name: "Omar Dere",
  email: "ataa.shaqour.as@gmail.com",
  isGold: true,
}

const movies = [
  'movie1',
  'movie2',
  'movie3'
];

async function notifyCustomer(){
  try{
      const customer = await getCustomer(1);
      console.log(customer);
    if(customer.isGold){
      const movies = await getTopMovies();
      console.log("Top movies: ", movies);
      await sendEmail(customer, movies);
      console.log("Email sent...");
    }
  }
  catch(error){
    console.log("Error: ", error.message);
  }
}

notifyCustomer().catch(err => console.log(err.message));

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 4000);  
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getRandomMovie(movies));
    }, 4000);
  });
}

async function sendEmail(user, movies) {
  return new Promise(async (resolve, reject) => {
    const transporter = createConnection();
    const info = await transporter.sendMail(getMailOptions(user, "Top movies", `This is the top movie you choosed: ${movies}`));
    resolve(console.log("Message sent: %s", info.messageId));
  });
}

function getRandomMovie(movies){
  return movies[Math.floor(Math.random()*movies.length)]
}

function createConnection(){
  return nodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: admin.email,
        pass: admin.password
    },
    stl: {rejectUnauthorized: false}
  });
}

function getMailOptions(user, subject, text){
  return {
    from: `${admin.name} <${admin.email}>`, // sender address
    to: user.email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  }
}