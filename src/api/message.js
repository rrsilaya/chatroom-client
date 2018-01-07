import axios from 'axios';

export const getMessages = id => {
  return axios.get(`/messages/${id}`);
}

export const sendMessage = (room, message) => {
  return axios.post(`/messages/${room}`, message);
}