import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page_home = () => {
  // Tableau pour stocker les tâches
  const tasks = Array(5).fill("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faire l'appel à votre API
        const response = await fetch('http://172.232.62.233:8000/tasks');
        const jsonData = await response.json();
        const valuesArray = Object.values(jsonData);
        
        setData(valuesArray);
        console.log(valuesArray);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='page-wrapper'>
      <div className="page-home">
        <h2>Task Settings</h2>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <input
                type="text"
                className="task-input"
                value={task}//  data[index]
                placeholder={`Task ${index + 1}`}
              />
              <div className="minute-item">56 minute</div> 
              {/* // {data[index]} */}
            </div>
          ))}
        </div>
        <Link to={"/agenda"}>
        <button className="send-button">Send to Jira</button>
        </Link>
      </div>
    </div>
  );
}

export default Page_home;
