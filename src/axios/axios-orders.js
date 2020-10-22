import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c3cd3.firebaseio.com/'
});

export default instance;
