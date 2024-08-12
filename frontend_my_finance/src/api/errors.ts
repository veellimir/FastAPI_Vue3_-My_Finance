import axios from 'axios';

export function handleError(error: unknown): void {
  if (axios.isAxiosError(error)) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data : error.message);

  } else {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred');
  }
}
