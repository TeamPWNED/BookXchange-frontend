import {api} from './api';

export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post('/account/login/', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};
