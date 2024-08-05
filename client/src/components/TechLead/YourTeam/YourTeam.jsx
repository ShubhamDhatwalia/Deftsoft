import React, { useState } from "react";
import AddMemberForm from "./AddMemberForm";
import EditMemberForm from "./EditMemberForm";
import TeamMemberCard from "./TeamMemberCard";

const initialMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    imgSrc: "https://via.placeholder.com/100",
    tasks: [],
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    imgSrc: "https://via.placeholder.com/100",
    tasks: [],
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "UX Designer",
    imgSrc: "https://via.placeholder.com/100",
    tasks: [],
  },
];

const YourTeam = () => {
  const [members, setMembers] = useState(initialMembers);
  const [editingMember, setEditingMember] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addMember = (member) => {
    setMembers([...members, { ...member, id: members.length + 1, tasks: [] }]);
    setShowAddForm(false);
  };

  const editMember = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setEditingMember(null);
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const assignTask = (id, task) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? { ...member, tasks: [...member.tasks, task] }
          : member
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Team</h1>
        <p className="text-lg text-gray-600">
          Meet the talented individuals behind the magic.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setShowAddForm(true)}
        >
          Add New Member
        </button>
      </header>

      {showAddForm && <AddMemberForm addMember={addMember} />}
      {editingMember && (
        <EditMemberForm member={editingMember} editMember={editMember} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onEdit={() => setEditingMember(member)}
            onDelete={() => deleteMember(member.id)}
            onAssignTask={assignTask}
          />
        ))}
      </div>
    </div>
  );
};

export default YourTeam;
