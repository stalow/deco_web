import React from 'react';

const Page_home = () => {
  // Tableau pour stocker les tâches
  const tasks = Array(5).fill("");

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
                value={task}
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
