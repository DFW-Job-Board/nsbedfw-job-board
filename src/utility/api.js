import axios from 'axios';

const realUrl = 'https://nsbedfw-job-board-backend.herokuapp.com';
const dummyUrl = 'http://localhost:8080';

export default axios.create({
  baseURL: `${realUrl}`,
  responseType: 'json',
});
