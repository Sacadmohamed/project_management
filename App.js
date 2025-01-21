import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from './components/ProjectForm';
import ProjectTable from './components/ProjectTable';
import ProjectService from './services/ProjectService';
import './App.css'; // Import the CSS file

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await ProjectService.getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const addProject = async (project) => {
    try {
      await ProjectService.createProject(project);
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const updateProject = async (id, project) => {
    try {
      await ProjectService.updateProject(id, project);
      fetchProjects();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await ProjectService.deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container"> {/* The container class here */}
      <h1>Project Management</h1>
      {/* Image below the title */}
      <img 
  src="/images.JPG" // Relative path to the image
  alt="Project Management"
  style={{ width: '8%', height: 'auto', display: 'block', margin: '10px auto' }} // Adjust width and center
/>
      <ProjectForm onSubmit={addProject} />
      <ProjectTable
        projects={projects}
        onDelete={deleteProject}
        onUpdate={updateProject}
      />
    </div>
  );
};

export default App;