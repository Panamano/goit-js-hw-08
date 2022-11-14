import { throttle } from 'lodash';

const iframeVimeo = new Vimeo.Vimeo(document.querySelector('#vimeo-Vimeo'));

const startTime = parseFloat(localStorage.getItem('videoVimeo-current-time')) || 0;

iframeVimeo.setCurrentTime(4);

function onPlaySeconds(data) {
  localStorage.setItem('videoVimeo-current-time', data.seconds);
  console.log(
    'Local saved time: ' + localStorage.getItem('videoVimeo-current-time')
  );
}

iframeVimeo.on('timeupdate', throttle(onPlaySeconds, 1000));
