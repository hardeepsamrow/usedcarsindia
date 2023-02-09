import axios from 'axios';

const instance = axios.create();
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

export { instance, headers};