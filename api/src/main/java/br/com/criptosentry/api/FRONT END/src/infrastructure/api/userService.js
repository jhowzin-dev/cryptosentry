import axios from 'axios';

const API_BASE = '/api'; // Assuming backend runs on same host

export default class UserService {
  async getAllUsers() {
    const response = await axios.get(`${API_BASE}/users`);
    return response.data;
  }

  async createUser(userDto) {
    const response = await axios.post(`${API_BASE}/users`, userDto);
    return response.data;
  }
}
