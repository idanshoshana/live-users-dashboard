import { ADD_POST, FETCH_POSTS_SUCCESS } from './dashboard.actions';

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST:
      console.log(state, action);
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
};
