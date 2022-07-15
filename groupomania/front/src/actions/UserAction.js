import * as UserApi from "../api/UserRequest";

// Mise à jour d'un utilisateur
export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};

// Follow d'un utilisateur
export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER", data: id });
  UserApi.followUser(id, data);
};
// UnFollow d'un utilisateur
export const unfollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER", data: id });
  UserApi.unfollowUser(id, data);
};
