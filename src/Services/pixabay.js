import axios from "axios";

const API_KEY = "23114127-913a50287ab6c0ea340feb686";
const BASE_URL = "https://pixabay.com/api/"

export const pixabayFetch = ({ query, page }) => {
 
 const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

  return axios
    .get(url)
    .then(({ data }) => data.hits)
};
