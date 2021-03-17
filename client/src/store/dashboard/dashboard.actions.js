export const FETCH_POSTS_SUCCESS = 'FETCH_POST_SUCCESS';
export const ADD_POST = 'ADD_POST';

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};
