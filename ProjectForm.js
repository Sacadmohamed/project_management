import React, { useState } from 'react';
import './ProjectForm.css'; // Import the CSS file

const ProjectForm = ({ onSubmit, existingProject }) => {
    const [name, setName] = useState(existingProject ? existingProject.name : '');
    const [description, setDescription] = useState(existingProject ? existingProject.description : '');
    const [status, setStatus] = useState(existingProject ? existingProject.status : 'active');

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = { name, description, status };
        onSubmit(projectData);
        setName('');
        setDescription('');
        setStatus('active');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="completed">Completed</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProjectForm;