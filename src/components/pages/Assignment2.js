import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, Typography, message } from 'antd';
import UserCard from '../UserCard';
import EditUserModal from '../EditUserModal';

const { Title } = Typography;

function Assignment2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [likedUsers, setLikedUsers] = useState(new Set());

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        message.error('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setModalVisible(false);
    setEditingUser(null);
    message.success('User updated successfully');
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    message.success('User deleted successfully');
  };

  const handleLike = (userId) => {
    const newLikedUsers = new Set(likedUsers);
    if (newLikedUsers.has(userId)) {
      newLikedUsers.delete(userId);
    } else {
      newLikedUsers.add(userId);
    }
    setLikedUsers(newLikedUsers);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setEditingUser(null);
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={1} style={{ textAlign: 'center', marginBottom: '32px' }}>
          User Profiles - Assignment 2 (Advanced)
        </Title>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {users.map((user) => (
              <Col xs={24} sm={12} md={8} key={user.id}>
                <UserCard
                  user={user}
                  avatarUrl={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}&mood=happy`}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onLike={handleLike}
                  liked={likedUsers.has(user.id)}
                />
              </Col>
            ))}
          </Row>
        )}
        
        <EditUserModal
          visible={modalVisible}
          user={editingUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

export default Assignment2;