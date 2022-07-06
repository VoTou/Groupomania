import * as PostApi from "../api/PostRequest";
import axios from "axios";

// posts
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

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

export const updatePost = (_id, desc) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}post/${_id}`,
      data: { desc },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, data: { desc, _id } });
      })
      .catch((err) => console.log(err));
  };
};
  
  export const deletePost = (_id) => {
    return (dispatch) => {

      return axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}post/${_id}`,
      })
        .then((res) => {
          dispatch({ type: DELETE_POST, data: { _id } });
        })
        .catch((err) => console.log(err)) ;
    };
  };


