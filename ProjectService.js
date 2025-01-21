// src/services/ProjectService.js
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api/projects'; // Make sure this matches your backend API URL

const getProjects = () => {
  return axios.get(apiUrl); // Fetch all projects
};

const createProject = (project) => {
  return axios.post(apiUrl, project); // Create a new project
};

const updateProject = (id, project) => {
  return axios.put(`${apiUrl}/${id}`, project); // Update an existing project
};

const deleteProject = (id) => {
  return axios.delete(`${apiUrl}/${id}`); // Delete a project
};

export default {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
