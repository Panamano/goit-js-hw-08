!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var n=r("1WSnx"),l=new Vimeo.Player(document.querySelector("#vimeo-player")),i=parseFloat(localStorage.getItem("videoplayer-current-time"))||0;l.setCurrentTime(i),l.on("timeupdate",(0,n.throttle)((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log("Local saved time: "+localStorage.getItem("videoplayer-current-time"))}),1e3))}();
//# sourceMappingURL=02-video.644eb3a1.js.map