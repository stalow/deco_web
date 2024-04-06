import React, { useState } from 'react';

const Page_home = () => {
  // Tableau pour stocker les tâches
  const tasks = Array(5).fill("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faire l'appel à votre API
        const response = await fetch('votre_url_de_l_api');
        const jsonData = await response.json();
        setData(jsonData);
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
              <div className="minute-item">56 minutes</div>
            </div>
          ))}
        </div>
        <button className="send-button">Send to Jira</button>
      </div>
    </div>
  );
}

export default Page_home;
