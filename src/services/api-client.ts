import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b6b91b6e4b554d2eae9cadb99c7b8fed'
  }
});