import React from 'react';
import { Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

function UserCard({ user, avatarUrl, onEdit, onDelete, onLike, liked }) {
  return (
    <Card
      style={{ margin: '16px 0' }}
      actions={[
        <Button 
          key="like" 
          type={liked ? "primary" : "default"} 
          icon={<HeartOutlined />} 
          onClick={() => onLike(user.id)}
        >
          Like
        </Button>,
        <Button 
          key="edit" 
          icon={<EditOutlined />} 
          onClick={() => onEdit(user)}
        >
          Edit
        </Button>,
        <Button 
          key="delete" 
          danger 
          icon={<DeleteOutlined />} 
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>,
      ]}
    >
      <Meta
        avatar={<img src={avatarUrl} alt={user.username} style={{ width: '64px', height: '64px', borderRadius: '50%' }} />}
        title={user.name}
        description={
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        }
      />
    </Card>
  );
}

export default UserCard;