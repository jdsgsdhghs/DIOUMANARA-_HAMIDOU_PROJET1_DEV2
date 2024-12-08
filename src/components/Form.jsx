import React, { useState } from "react";
import { useNavigate,useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: FFD166;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-height: 100px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  background-color: #26547c;
  color: EF476F;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #337ab7;
    transform: scale(1.05);
  }
`;

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([{ title: "", description: "", status: "new" }]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChecklist = { title, description, tasks };
    console.log("Checklist saved:", newChecklist);
    navigate("/Dashboard");
  };

  const handleAddTask = () => {
    setTasks([...tasks, { title: "", description: "", status: "new" }]);
  };

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1>{id ? "Edit Checklist" : "Create a New Checklist"}</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <StyledInput
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <StyledTextarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>

        <h2>Tasks</h2>
        {tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <label htmlFor={`task-${index}-title`}>Task Title</label>
            <StyledInput
              id={`task-${index}-title`}
              type="text"
              value={task.title}
              onChange={(e) => handleTaskChange(index, "title", e.target.value)}
              placeholder="Task title"
              required
            />
            <label htmlFor={`task-${index}-description`}>Task Description</label>
            <StyledTextarea
              id={`task-${index}-description`}
              value={task.description}
              onChange={(e) => handleTaskChange(index, "description", e.target.value)}
              placeholder="Task description"
              required
            />
            <StyledButton type="button" onClick={() => handleDeleteTask(index)}>
              Delete Task
            </StyledButton>
          </div>
        ))}

        <StyledButton type="button" onClick={handleAddTask}>
          Add Task
        </StyledButton>

        <StyledButton type="submit">Save Checklist</StyledButton>
      </StyledForm>
      <StyledButton onClick={() => navigate("/Dashboard")}>Back to Dashboard</StyledButton>
    </div>
  );
};

export default Form;
