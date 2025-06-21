import axios from "axios";

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

export const getAllUsers = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/users").then((res) => {
      dispatch(setUsers(res.data));
    });
  };
};

export const addUser = (newUser) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/users", newUser).then(() => {
      dispatch(getAllUsers());
    });
  };
};

export const updateUser = (id, updatedUser) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/users/${id}`, updatedUser).then(() => {
      dispatch(getAllUsers());
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      dispatch(getAllUsers());
    });
  };
};
