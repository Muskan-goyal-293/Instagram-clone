import axios from "axios";

// create axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});


// register api function
export async function registerUser(
  email,
  password,
  month,
  day,
  year,
  userName,
  lastName
) {

  const response = await api.post("/register", {
    email,
    password,
    month,
    day,
    year,
    userName,
    lastName
  });

  return response;
}


// login api function
export async function loginUser(
  userName,
  password
) {

  const response = await api.post("/login", {
    userName,
    password
  });

  return response;
}