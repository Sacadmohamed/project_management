import React from 'react';
import './ProjectTable.css'; // Import the CSS file

const ProjectTable = ({ projects, onDelete, onUpdate }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.status}</td>
                        <td>
                            <button onClick={() => onUpdate(project.id, project)}>Edit</button>
                            <button onClick={() => onDelete(project.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProjectTable;