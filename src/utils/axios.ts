// src/utils/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Ganti dengan URL API Anda
});

export default axiosInstance;
