var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var l=r("kEUo3");const n=new Vimeo.Player(document.querySelector("#vimeo-player")),i=parseFloat(localStorage.getItem("videoplayer-current-time"))||0;n.setCurrentTime(i),n.on("timeupdate",(0,l.throttle)((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log("Local saved time: "+localStorage.getItem("videoplayer-current-time"))}),1e3));
//# sourceMappingURL=02-video.55012888.js.map
