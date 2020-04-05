import axios from 'axios';

const KEY = 'AIzaSyCQFcAVpvh6JPRLAN0f7GH-4CYMW25SoW4';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult:5,
        key: KEY
    }
});

