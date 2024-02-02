import axios from 'axios';

const getBreeds = axios.create({
    baseURL: 'https://gist.githubusercontent.com/arturschaefer/abf8f94bcff14ace1b88c7977d651a74/raw/4c329530a24fe2e4b21029ed7a687a767aa9622a/breed_list.json'
});

export default getBreeds;