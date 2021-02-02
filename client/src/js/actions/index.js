import {
  GET_USERS,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
} from "../const/actionTypes";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios.get("/api/users").then((res) => {
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  }).catch(err=>alert('err get'));
};

export const removeUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then((res) => {
      dispatch({
        type: REMOVE_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("ERROR DELETE"));
};

export const addUser = (name, lastName, email, phone) => (dispatch) => {
  const newUser = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .post("/api/add_user", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("ERROR ADD"));
};

export const editUser = (id, name, lastName, email, phone) => (dispatch) => {
  const userModified = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .put(`/api/users/${id}`, userModified)
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    })
    .catch((err)=>alert("ERROR EDIT"));
};
