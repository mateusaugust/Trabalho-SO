import axios from "axios";

const SearchTicker = axios.create({
  baseURL: "http://localhost:5555/",
});

export default SearchTicker;