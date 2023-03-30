import axios from 'axios';

const basesUrl = "https://rickandmortyapi.com/api";

const baseConfig = {
    baseURL: `${basesUrl}`,
    timeout: 10000,
};

const axiosInstance = axios.create({
    ...baseConfig,
});

export const api = axiosInstance;
