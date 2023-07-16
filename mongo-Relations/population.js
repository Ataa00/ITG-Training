import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
  });

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  //Referencing document
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Author"
  // },
  //Embeding Document
  authors: [authorSchema]
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .select({
      name: 1,
      authors: 1
    })
    // .populate("author", "name -_id");
  console.log(courses);
}

async function addAuthor( courseID, author){
  const course = await Course.findById(courseID);
  course.authors.push(author);
  await course.save();
}

// createAuthor('Ataa', 'My bio', 'My Website');

// createCourse('Node Course',
// [ 
// new Author({name: "Ataa"}),
// new Author({name: "Mosh"})
// ]);

addAuthor("64b3dee36ae0474b3fb5208d", new Author({name: "Hamza"}));

listCourses();