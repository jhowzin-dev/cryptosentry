import React, { useState } from 'react';
import UserService from '../../infrastructure/api/userService';
import CreateUser from '../../application/usecases/CreateUser';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const userService = new UserService();
  const createUser = new CreateUser(userService);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    await createUser.execute({ name, email });
    // simple reload; in real app would update state
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add User</button>
    </form>
  );
}
