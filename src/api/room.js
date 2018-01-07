import axios from 'axios';

export const getRooms = () => {
  return axios.get('/rooms');
}

export const addRoom = room => {
  return axios.post('/room', room);
}