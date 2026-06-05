import React from 'react';
import UserForm from './presentation/components/UserForm';
import UserList from './presentation/components/UserList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
