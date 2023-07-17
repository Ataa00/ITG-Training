# ITG-Training

# Folder Description:

## Project Vidly:  
It is an imaginary service to renting out movies.

# Practice-Work-Project – Part 1 (Build the genres APIs):
---

Building a service to manage the list of genres.  
You should create an end-point to GET all the genres. As well as Create a new genre and Update or DELETE an existing one.  
http://vidly.com/api/genres/

# Testing:

Use the following URLs to test CRUD functions.

- For GET:  
  - To get all genres: http://localhost:3000/api/genres/
    - It Sends a request to get all movies in stock. 
    - It returns a response to a list with all movies.
  - To get a specific genre: http://localhost:3000/api/genres/:name
    - Here we provide the type of the genre in the request header (URL).  
      example:  http://localhost:3000/api/genres/:Drama
    - It returns a response to a list of all movies that have the same genre.
- For POST:  
To create a new genre: http://localhost:3000/api/genres/
  - Here we send the movie type inside the body request as follows:  
    ```
    {
      "name": "Drama"
    } 
    ```
  - It returns a response with all genres listed.
- For PUT:  
  To edit an existing genre: http://localhost:3000/api/genres/:name
    - Here we provide the type of the genre in the request header (URL).  
      and provide the corrected movie type name inside the request body as follows:  
      http://localhost:3000/api/genres/Action
      ```
      {
        "name": "Comedy"
      } 
      ```
    - It returns a response with all genres listed.
- For DELETE:  
  To delete a genre: http://localhost:3000/api/genres/:name
    - Here we provide the type of the genre in the request header (URL).  
      http://localhost:3000/api/genres/Action
    - It returns a response with all genres listed.

**Note:**  
You should provide the changes within the body request.
```
{
  "name":"Drama"
}
```
# Practice-Work-Project – Part 2 (Restructure the app):  
- The express project should contain the following:
  - Middleware: To add middleware files
  - Config: to add configurations for DB, dev or production.
  - Public: add static files like CSS and images.
  - Routes: to handle routes.
  - Views: to add html files
- For this project, I needed to add a middleware folder and a routes folder:
  - Middleware:  
    I add two files:
      - data.js: to export the genres and movies data.
      - validation.js: to export the function that validates the movie type.
  - Routes:  
    I have two main routes:
      - Genres
      - Home
      - Customers
# Project Vidly Version2:
- Updated the project structure as follows:
  - Controller:
    Holds the modules that control genre APIs and Customer APIs as follows:
    - Create a new Genre
    - Get Genres
    - Get a specific Genre
    - Update Genre 
    - Delete Genre
  - Middleware:
    - Added a module to handle the connection with MongoDB using Mongoose.
    - Validation:
      Modified this module to two functions one to validate the GenreID and the other to validate GenreType and validate CustomerID and Customer parameters.
  - Models:  
    This folder holds modules that return the schema model of the Genre collection in the DB.
  - Routes:  
    Same as Version 1. 
- Added new APIs for Customers:
  - For Create user:
    - I used the POST method.
    - URL: http/localhost:3000/api/customers/
    - Inside body request:
      ```
      {
        "name": "Human",
        "phoneNumber: "00000000000000",
        isGolden: ture
      }
      ```   
    - It will go through the validation function in the middleware to validate the provided customer parameters.
    - After that, before saving the customer instance the Mongoose model for the customer will check if the parameters are valid or not.
    - It will return the created customer instance.
  - For get user:
    - There are two methods
      - Get single customer:
        - I used the GET method.
        - URL: http/localhost:3000/api/customers/:customerID
        - Inside body request:
          ```
          {
            "customerID": "xxxxxxxxxxxxxx"
          }
          ```   
        - It will go through the validation function in the middleware to validate the provided customerID.
        - CustomerID should be 24 characters of type objectId.  
        - It will return the wanted customer instance.
      - Get all customers:
        - I used the GET method.
        - URL: http/localhost:3000/api/customers  
        - It will return all customers.
  - For updated user:
    - I used the PUT method.
    - URL: http/localhost:3000/api/customers/updateCustomer/:customerID
    - Inside body request:
      ```
      {
        "name": "Human",
        "phoneNumber: "00000000000000",
        isGolden: true
      }
      ```   
    - First, It will check if the wanted customer is inside the database. 
    - Secondly, If it is there, It will go through the validation function in the middleware to validate the provided customer parameters.
    - After that, before saving the updated customer the Mongoose model for the customer will check if the parameters are valid or not.
    - It will update it and return a status message if it is updated or not. 
  - For delete user:
    - I used the DELETE method.
    - URL: http/localhost:3000/api/customers/:customerID
    - First, It will check if the wanted customer is inside the database. 
    - Secondly, If it is there, It will go through the validation function in the middleware to validate the provided customerID.
    - It will Delete it and return a status message if it is deleted or not. 

# The standards of API paths:
- End-point paths should be represented as nouns, not verbs. One of the reasons is that the HTTP request method is already written as verbs so it naming it as a verb isn't useful and makes it unnecessary.
- The action should be indicated from the HTTP request methods which are: GET, POST, PUT, DELETE.
  - GET: /genres/ => Retrieve data
  - POST: /genres/ => Create an instance
  - PUT: /genre/:id => Update an item already exists in the DB
  - DELETE: /genre/:id => Delete an item in the DB