// Modeling relationships
// 1- Using References (Normalization) => Advantages -> Consistancy
let author = {
    id: "123",
    name: "Ataa"
}

let course = {
    author: author.id
}

console.log(course)

//If the author id is wrong, MongoDB doesn't care about it.

// 2- Using Embedded Documents (Denormalization) => Advantages -> Performance
let author2 = {
    id: "111",
    name: "Ataa"
}

let course2 = {
    author: author2
}

console.log(course2)

// Hybred -> In the middle -> Snapshots
let author3 = {
    id: "12333",
    name: "Ataa",
    age: 23,
    nationality: "Palestinian",
    datwOfBirth: "09-02-2000" 
    //Other 50 properties
}

let course3 = {
    author: {
        id: author3.id,
        name: author3.name
    }
}

console.log(course3)