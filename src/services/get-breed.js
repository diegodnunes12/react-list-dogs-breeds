import axios from 'axios';

const getBreeds = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/breeds'
});

export default getBreeds;