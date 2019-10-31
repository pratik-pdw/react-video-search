import axios from 'axios';

const KEY = 'AIzaSyCd3QSpAIqjSB8K8tZ1pab9BupUpzYYRG8';  

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})