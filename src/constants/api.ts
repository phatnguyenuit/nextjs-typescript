import Axios from 'axios';

const api = Axios.create();

export const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

export default api;
