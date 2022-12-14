import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

setCurrentTime();

function getCurrentTime() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    })
}

function setCurrentTime() {
    const currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) {
        player.setCurrentTime(JSON.parse(currentTime));
    } 
} 
