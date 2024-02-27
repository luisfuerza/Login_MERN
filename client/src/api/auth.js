// archivo conectar con backend

import axios from 'axios';

const API = 'http://localhost:5001/api';//esta es la url de nuestro servidor backend

export const registerRequest = user => axios.post(`${API}/register`, user);//exportamos esta funcion que hace una
//peticion post con endpoint register y le pasamos el user(usuario)