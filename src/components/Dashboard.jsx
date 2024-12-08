import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const StyledCard = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  & button {
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  & .edit {
    background-color: #4caf50;
    color: white;
  }

  & .delete {
    background-color: #f44336;
    color: white;
  }

  & .delete:hover {
    background-color: #d32f2f;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  // initial checklists
  const [checklists, setChecklists] = useState([
    { id: 1, title: "faire le devoir", description: "devoir javascript et react", status: "Pending", tasks: [{ id: 1, status: "completed" }, { id: 2, status: "in-progress" }] },
    { id: 2, title: "jouer a la play", description: "pendant 1h", status: "Completed", tasks: [{ id: 1, status: "completed" }] },
    { id: 3, title: " faire des courses", description: "a 14h dans le centre commercial bourget", status: "In Progress", tasks: [{ id: 1, status: "new" }] },
    { id: 4, title: "aller a la salle de sport ", description: "travailler le cardio et les abdos", status: "Completed", tasks: [{ id: 1, status: "Completed" }] },
  ]);

  // direct to form page for udpade 
  const handleRedirect = () => {
    navigate("/form" );
  };
 

  // delete checklist
  const handleDelete = (id) => {
    const updatedChecklists = checklists.filter((checklist) => checklist.id !== id);
    setChecklists(updatedChecklists);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1>Dashboard</h1>
      <StyledCard>
        <h2>My Checklists</h2>
        {checklists.length === 0 ? (
          <p>No checklists found. Please add one!</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {checklists.map((checklist) => (
              <li
                key={checklist.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  margin: "10px 0",
                  padding: "15px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <h3>{checklist.title}</h3>
                <p>{checklist.description}</p>
                <p>Status: {checklist.status}</p>
                <p>{checklist.tasks.filter(task => task.status === "completed").length} / {checklist.tasks.length} tasks done</p>
                <StyledDiv>
                  <button className="edit" onClick={() => navigate(`/form/${checklist.id}`)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(checklist.id)}>Delete</button>
                </StyledDiv>
              </li>
            ))}
          </ul>
        )}
      </StyledCard>
      <button
        onClick={handleRedirect}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#26547c",
          color: "FFD166",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Add New Checklist
      </button>
    </div>
  );
};

export default Dashboard;
