import axios from 'axios';

export const signUpRequest = async ({ username, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/signup`,
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};

export const loginRequest = async ({ username, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
