import {
  ADD_USER,
  EDIT_USER,
  GET_USERS,
  REMOVE_USER,
} from "../const/actionTypes";
const initialState = {
  users: [],
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: false, users: action.payload };
    case ADD_USER:
      return { ...state, users: [action.payload, ...state.users] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id
            ? { ...user, ...action.payload }
            : user
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
