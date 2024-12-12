import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Your backend API base URL
});

export default instance;
