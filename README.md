# project_management
## Table of Contents
- [Project Overview](#project-overview)
- [Tools/Languages Used](#toolslanguages-used)
- [Installation Guidelines](#installation-guidelines)
- [API Documentation](#api-documentation)

### Project Overview
The Project Management System is a web application that allows users to manage projects effectively. Users can create, read, update, and delete project details, including the project name, description, and status.

### Tools/Languages Used
- Backend: Laravel (PHP Framework)
- Frontend: React.js
- Database: MySQL
- Styling: CSS


### Installation Guidelines
#### BackEnd
Setting the working directory as the backend
```Terminal
cd C:\xampp\htdocs\Project Management\project-management-api
```

Installation of the composer
```
composer install
```

Installation of the Laravel PHP framework
```
Install Laravel via Composer
```

#### Settingup the Environment
```
php artisan key:generate
```


#### Migrate the Database
```
php artisan migrate
```


#### Frontend
Setting the working directory as the backend
```
cd C:\xampp\htdocs\Project Management\project-management-frontend
```

installation of the front end Javascript
```
npm install
```



#### Running the Application
1.	Running the Laravel server
```
php artisan serve
```

2.	Start the React Application
```
npm start
```


### API Documentation
Routes
- GET /api/user: Retrieve the authenticated user's information.
- GET /api/projects: Fetch all projects.
- POST /api/projects: Create a new project.
- GET /api/projects/{id}: Retrieve a specific project by ID.
- PUT /api/projects/{id}: Update an existing project by ID.
- DELETE /api/projects/{id}: Delete a project by ID.


### Request and Response Formats
#### Create Project (POST /api/projects):
Request Body:
```json
{
  "name": "Project Name",
  "description": "Project Description",
  "status": "active"
}
```

Response:
```json
{
  "id": 1,
  "name": "Project Name",
  "description": "Project Description",
  "status": "active",
  "created_at": "2023-01-01T00:00:00.000000Z",
  "updated_at": "2023-01-01T00:00:00.000000Z"
}
```
