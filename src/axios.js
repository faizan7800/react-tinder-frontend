import axios from 'axios'

const instance = axios.create({
  baseURL: "https://faizan-tinder-backend.herokuapp.com",
});

export default instance;