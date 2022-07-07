import * as PostApi from "../api/PostRequest";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
// posts
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// Récupération des posts sur la timeline
export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

// Action mise à jour d'un post
export const updatePost = (_id, desc, userId) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}post/${_id}`,
      data: { desc, userId },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, data: { desc, _id } });
      })
      .catch((err) => console.log(err));
  };
};

// Suppression d'un post
export const deletePost = (_id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}post/${_id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
      },
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, data: { _id } });
      })
      .catch((err) => console.log(err));
  };
};
