import axios from 'axios';
import type { Book } from '../types/Book';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
});

export const getAllBooks = () => api.get<Book[]>('/browse');