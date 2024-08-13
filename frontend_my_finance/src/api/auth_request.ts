import axios, { AxiosResponse } from 'axios';

import { API_URL } from './url.ts';
import { LOGIN_HTTP_HEADERS, REGISTER_HTTP_HEADERS } from './headers.ts';

import { handleError } from './errors.ts';
import router from '../router/router.ts';





interface AuthResponse {
    access_token: string;
    key?: string;
}

const user_login = async ( username: string, password: string ): Promise<AuthResponse> => {
    try {
      const response: AxiosResponse<AuthResponse> = await axios.post(
        `${API_URL}auth/login`, new URLSearchParams({ username, password }), { headers:  LOGIN_HTTP_HEADERS  }
      );
      router.push({ name: 'Home' });
      return response.data;
    }
    catch (error) {
        handleError (error);
        throw new Error('Unexpected error occurred');
    }
};


const user_register = async ( email: string, password: string ) => {
  try {
    const response = await axios.post(`${API_URL}auth/register`, { email, password }, { headers: REGISTER_HTTP_HEADERS });

    router.push({ name: 'Login' });
    return response.data
  }
  catch (error) {
    handleError (error);
  }
};

export { user_login, user_register };