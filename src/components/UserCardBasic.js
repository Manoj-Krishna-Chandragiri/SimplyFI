import React from 'react';

function UserCardBasic({ user, avatarUrl }) {
  return (
    <div className="card mb-4">
      <div className="row no-gutters align-items-center">
        <div className="col-md-4 text-center">
          <img src={avatarUrl} alt={user.username} className="card-img p-3" style={{ width: '120px', height: '120px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
            <p className="card-text mb-1"><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p className="card-text mb-1"><strong>Website:</strong> {user.website}</p>
            <p className="card-text mb-0"><strong>Company:</strong> {user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardBasic;