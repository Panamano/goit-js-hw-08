import { throttle } from 'lodash';

const iframeVimeo = new Vimeo.Player(document.querySelector('#vimeo-player'));

const startTime =
  parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;

iframeVimeo.setCurrentTime(startTime);

function onPlaySeconds(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(
    'Local saved time: ' + localStorage.getItem('videoplayer-current-time')
  );
}

iframeVimeo.on('timeupdate', throttle(onPlaySeconds, 1000));
