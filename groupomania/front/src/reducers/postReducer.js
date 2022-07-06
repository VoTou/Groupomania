import { DELETE_POST, UPDATE_POST } from "../actions/PostAction";

const postReducer = (
  state = { posts: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };

    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    case UPDATE_POST:
      return state.map((posts) => {
        if (posts._id === action.data._id) {
          return {
            ...posts,
            desc: action.data.desc,
          };
        } else 
        return posts;

      });
    case DELETE_POST:
      return state.filter((posts) => posts._id !== action.data._id);
    default:
      return state;
  }
};

export default postReducer;
