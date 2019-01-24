import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID d6bd848c63ccc9f5867b91f20579bd1c7e6776459a6aace067fd718f8e656255"
      }
})