import axios from 'axios';

const API_KEY = '32927001-bdf8cd2697946056c57f9b5f5';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) {
    const params = {
    q: { query },
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: { page },
    per_page: 12,
    key: API_KEY
};
    const { data } = await axios.get(BASE_URL, {params});
    return data;
}

// =======================================================================================
// const API_KEY = '32927001-bdf8cd2697946056c57f9b5f5';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 12,
//     key: API_KEY
// };

// export const fetchImages =  async (query, page) {
//     const { data } = await axios.get(`?q=${query},page=${page}`);
//     return data;
// }