
import React, { useEffect, useState } from 'react';

import UserCard from './components/UserCard';
import './App.css';
import './spinkit.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">User Profiles</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          {/* SpinKit spinner: simple CSS spinner */}
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <UserCard
                user={user}
                avatarUrl={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}&mood=happy`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
