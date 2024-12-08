import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import { useState } from 'react';

const token = "f29ec6f775673f461a63e529e603ace0b8fb5c46";


const App = () => {

    const [checklists, setChecklists] = useState([]); 
    const addChecklist = (newChecklist) => {
      setChecklists([...checklists, newChecklist]); 
    };

    
    
    return(

        <Router>
          <Routes>
            <Route path="/" element={<Dashboard checklists={checklists} />} />
            <Route path="/form" element={<Form  onAddChecklist={addChecklist} />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
    )
   
  
  
};

export default App;
