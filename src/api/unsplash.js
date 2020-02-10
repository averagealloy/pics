import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 58eb296081f66d1f72480e7a1313550366e9d5dc26868135074e0ac815b340a9' 
    }
});