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
    - It Sends a request to get all movies in the stock. 
    - It return a response a list with all movies.
  - To get a specific genre: http://localhost:3000/api/genres/:type
    - Here we provides the type of the genre in the request header (URL).  
      example:  http://localhost:3000/api/genres/Action
    - It return a response a list with all movies that have the same genre.
- For POST:  
To create a new genre: http://localhost:3000/api/genres/addGenre  
  - Here we send the movie type inside the body request as follows:  
    ```
    {
      "type": "Drama"
    } 
    ```
  - It returns a response with all genres list.
- For PUT:  
  To edit an existing genre: http://localhost:3000/api/genres/:type  
    - Here we provide the type of the genre in the request header (URL).  
      and provide the corrected movie type name inside the request body as follows:  
      http://localhost:3000/api/genres/Action
      ```
      {
        "type": "Drama"
      } 
      ```
    - It returns a response with all genres list.
- For DELETE:  
  To delete a genre: http://localhost:3000/api/genres/:type
    - Here we provide the type of the genre in the request header (URL).  
      http://localhost:3000/api/genres/Action
    - It returns a response with all genres list.

**Note:**  
You should provide the changes within the body request.
```
{
  "type":"Drama"
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
# Project Vidly Version2:
- Updated the project structure as follows:
  - Controller:
    Holds the modules that control genre APIs as follows:
    - Create a new Genre
    - Get Genres
    - Get a specific Genre
    - Update Genre 
    - Delete Genre
  - Middleware:
    - Added module to handle the connection with MongoDB using mongoose.
    - Validation:
      Modified this module to two functions one to validate the GenreID and the other to validate GenreType.
    - Models:
      This folder holds modules that return the schema model of Genre collection in the DB.
    - Routes: 
      Same as Version 1. 