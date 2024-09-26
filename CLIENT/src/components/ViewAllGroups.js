import React, { useEffect, useState } from 'react';
import './ViewAllGroups.css';

function ViewAllGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/viewall')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched groups:', data); 
        setGroups(data);
      })
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div className="groups-container">
      <h1>All Groups</h1>
      <div className="group-list">
        {groups.map((group, index) => (
          <div key={index} className="group-item">
            {group.groupImage && (
              <img 
                src={`http://localhost:8081${group.groupImage}`} 
                alt={`${group.groupName} logo`} 
                className="group-image"
              />
            )}
            <h2>{group.groupName}</h2>
            <p>{group.groupDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllGroups;
