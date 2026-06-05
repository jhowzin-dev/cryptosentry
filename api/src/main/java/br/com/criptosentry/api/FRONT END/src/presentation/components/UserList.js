import React, { useEffect, useState } from 'react';
import UserService from '../../infrastructure/api/userService';
import GetAllUsers from '../../application/usecases/GetAllUsers';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const userService = new UserService();
  const getAllUsers = new GetAllUsers(userService);

  useEffect(() => {
    (async () => {
      const data = await getAllUsers.execute();
      setUsers(data);
    })();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
}
