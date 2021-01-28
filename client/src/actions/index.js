import axios from "axios";

export function auth() {
  const request = axios.get("/api/auth").then((res) => res.data);

  return {
    type: "USER_AUTH",
    payload: request,
  };
}
export function clearUser() {
  return {
    type: "CLEAR_USER",
    payload: {},
  };
}

export function auth1() {
  const request = axios.get("/api/auth_owner").then((res) => res.data);

  return {
    type: "OWNER_AUTH",
    payload: request,
  };
}
export function loginUser({ email, password }) {
  const request = axios
    .post("/api/login", { email, password })
    .then((res) => res.data);
  return {
    type: "USER_LOGIN",
    payload: request,
  };
}
export function ownerLogin({ email, password }) {
  const request = axios
    .post("/api/login_owner", { email, password })
    .then((res) => res.data);
  return {
    type: "OWNER_LOGIN",
    payload: request,
  };
}
export function bookResturant(id) {
  const request = axios
    .get(`/api/get_resturant?id=${id}`)
    .then((res) => res.data);
  return {
    type: "BOOK_RESTURANT",
    payload: request,
  };
}
export function getResturants() {
  const request = axios.get(`/api/get_Resturants`).then((res) => res.data);
  return {
    type: "GET_RESTURANTS",
    payload: request,
  };
}

export function bookingResturant(book) {
  const request = axios.post("/api/reservation", book).then((res) => res.data);

  return {
    type: "BOOK_RESTURANT",
    payload: request,
  };
}
export function getReservation(id) {
  const request = axios
    .get(`/api/getReservatinInfo?id=${id}`)
    .then((res) => res.data);

  return {
    type: "GET_RESTURANT",
    payload: request,
  };
}
export function userRegister(user) {
  const request = axios.post(`/api/register`, user).then((res) => res.data);
  return {
    type: "USER_REGISTER",
    payload: request,
  };
}
export function registerResturant(rest) {
  const request = axios.post(`/api/addResturant`, rest).then((res) => res.data);
  return {
    type: "REGISTER_RESTURANT",
    payload: request,
  };
}
export function getReservations(id) {
  const request = axios
    .get(`/api/getReservations?id=${id}`)
    .then((res) => res.data);
  return {
    type: "GET_ORDER",
    payload: request,
  };
}

export function updateResturant(data) {
  const request = axios.post(`/api/addResturant`, data).then((res) => res.data);

  return {
    type: "UPDATE_RESTURANT",
    payload: request,
  };
}

export function getUser(id) {
  const request = axios.get(`/api/getUser?id=${id}`).then((res) => res.data);
  return {
    type: "GET_USER",
    payload: request,
  };
}
