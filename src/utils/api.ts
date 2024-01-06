import axios from 'axios';
import { API_URL } from '../../constants';
import jwt from 'jsonwebtoken';

export const api = axios.create({
  baseURL: API_URL,
});

export const getAllBooks = async () => {
  try {
    // Get the access token from localStorage
    let accessToken = localStorage.getItem('accessToken');

    // Make sure the token is available
    if (!accessToken) {
      throw new Error('Access token not found in localStorage');
    }

    // Check if the access token is expired
    const isTokenExpired = isAccessTokenExpired(accessToken);

    // If the token is expired, refresh it
    if (isTokenExpired) {
      accessToken = await refreshAccessToken();
    }

    // Make a request to the API with the access token in the headers
    const response = await api.get('/book', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; // You might want to handle this error differently in your application
  }
};



// Helper function to check if the access token is expired
const isAccessTokenExpired = (accessToken: string | null) => {
  try {
    if (!accessToken) {
      // If the token doesn't exist, consider it as expired
      return true;
    }

    // Decode the token to access its payload
    const decodedToken: any = jwt.decode(accessToken);

    // Check if the expiration time (exp claim) is in the past
    if (decodedToken && decodedToken.exp) {
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();

      // Token is expired if the expiration time is in the past
      return expirationTime < currentTime;
    }

    // If there's no expiration time, consider it as expired
    return true;
  } catch (error) {
    console.error('Error decoding access token:', error);
    // Consider the token as expired in case of decoding errors
    return true;
  }
};

// Helper function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    // Make sure the refresh token is available
    if (!refreshToken) {
      throw new Error('Refresh token not found in localStorage');
    }

    // Make a request to the refresh token endpoint
    const response = await api.post('/account/login/refresh/', {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;

    // Update the localStorage with the new access token
    localStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};
