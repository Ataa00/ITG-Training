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
  - To get a specific genre: http://localhost:3000/api/genres/Action
- For POST:  
To create a new genre: http://localhost:3000/api/genres/Drama
- For PUT:  
To edit an existing genre: http://localhost:3000/api/genres/Action
- For DELETE:  
To delete a genre: http://localhost:3000/api/genres/Action

**Note:**  
You should provide the changes within the body request.
```
{
  "type":"Drama"
}
```
# Practice-Work-Project – Part 2 (Restructure the app):  
- Express project should contain the following:  
  - Middleware: To add middleware files
  - Config: to add configurations for DB, dev or production.
  - Public: to add static files like css and images.
  - Routes: to handle routes.
  - Views: to add html files
- For this project I needed to add middleware folder and routes folder:
  - Middleware:  
    I add two files:  
      - data.js: to export the genres and movies data.
      - validation.js: to export the function that validate the movie type.
  - Routes:  
    I have two main routes:  
      - Genres
      - Home 