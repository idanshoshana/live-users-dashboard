import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createPostRequest = async (token, { title, content }) => {
  const { sub } = jwt_decode(token);
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/users/${sub}/posts`,
    {
      title,
      content,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const fetchPostsRequest = async (token) => {
  const { sub } = jwt_decode(token);
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/users/${sub}/posts`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
