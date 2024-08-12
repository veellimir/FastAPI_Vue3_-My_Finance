import axios, { AxiosResponse } from 'axios';

import API_URL from './url.ts';
import AUTH_HTTP_HEADERS from './headers.ts';
import { handleError } from './errors.ts';



interface LoginResponse {
    access_token: string;
    [key: string]: any;
}

const user_login = async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        API_URL + 'auth/login',
        new URLSearchParams({ username: username, password: password }), { headers: { ...AUTH_HTTP_HEADERS } }
      );
      return response.data;
    }
    catch (error) {
        handleError (error);
        throw new Error('Unexpected error occurred');
    }
};

export { user_login };
