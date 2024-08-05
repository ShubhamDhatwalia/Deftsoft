import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectForm from "./AddProjectForm";
import EditProjectForm from "./EditProjectForm";
import AssignMembersForm from "./AssignMembersForm"; // New component

const initialProjects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A major project focusing on AI development.",
    status: "In Progress",
    members: [], // Initially no members
  },
  {
    id: 2,
    name: "Project Beta",
    description: "A project related to cloud infrastructure.",
    status: "Completed",
    members: [],
  },
  {
    id: 3,
    name: "Project Gamma",
    description: "A new initiative for UX improvements.",
    status: "Pending",
    members: [],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [editingProject, setEditingProject] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [projectToAssign, setProjectToAssign] = useState(null); // New state

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: projects.length + 1 }]);
    setShowAddForm(false);
  };

  const editProject = (updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setEditingProject(null);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const assignMembers = (projectId, members) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, members } : project
      )
    );
    setProjectToAssign(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Project Management
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your projects efficiently with our intuitive interface.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={() => setShowAddForm(true)}
        >
          Add New Project
        </button>
      </header>

      {showAddForm && (
        <AddProjectForm
          addProject={addProject}
          onClose={() => setShowAddForm(false)}
        />
      )}
      {editingProject && (
        <EditProjectForm project={editingProject} editProject={editProject} />
      )}
      {projectToAssign && (
        <AssignMembersForm
          project={projectToAssign}
          assignMembers={assignMembers}
          onClose={() => setProjectToAssign(null)}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={() => setEditingProject(project)}
            onDelete={() => deleteProject(project.id)}
            onAssign={() => setProjectToAssign(project)} // New handler
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
