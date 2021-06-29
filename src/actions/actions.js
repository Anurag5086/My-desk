import axios from 'axios';

export const addUser = async (name, email, googleId) => {
    return await axios
    .post('https://mydeskbackend.herokuapp.com/addUser',{
        name: name,
        email: email,
        googleId: googleId
      })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
}

export const addTodo = async (email, todoName, todoDate, todoTime) => {
  return await axios
  .post('https://mydeskbackend.herokuapp.com/addTodo',{
      email: email,
      todoName: todoName,
      todoDate: todoDate,
      todoTime: todoTime
    })
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const getTodos = async (email) => {
  return await axios
  .get(`https://mydeskbackend.herokuapp.com/getTodo/${email}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const deleteTodo = async (email, todoName) => {
  return await axios
  .delete(`https://mydeskbackend.herokuapp.com/deleteTodo/${email}/${todoName}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const checkTodo = async (email, todoName, todoStatus) => {
  return await axios
  .put(`https://mydeskbackend.herokuapp.com/checkTodo`, {
    email: email,
    todoName: todoName,
    todoStatus: todoStatus
  })
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const addEvent = async (email, id, title, start, end) => {
  return await axios
  .post(`https://mydeskbackend.herokuapp.com/addEvent`, 
  { email, 
    id, 
    title, 
    start, 
    end
  })
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const deleteEvent = async (email, id) => {
  return await axios
  .delete(`https://mydeskbackend.herokuapp.com/deleteEvent/${email}/${id}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const getEvents = async (email) => {
  return await axios
  .get(`https://mydeskbackend.herokuapp.com/getEvents/${email}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const uploadFile = async (email, data, name, date, type) => {
  return await axios
  .post(`https://mydeskbackend.herokuapp.com/uploadFile`, {
    headers: { 'Content-Type': 'application/json' },
    email,
    data,
    name,
    date,
    type
  })
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const getFiles = async (email, type) => {
  return await axios
  .get(`https://mydeskbackend.herokuapp.com/getFiles/${email}/${type}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const deleteFile = async (email, id) => {
  return await axios
  .delete(`https://mydeskbackend.herokuapp.com/deleteFile/${email}/${id}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}