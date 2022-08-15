// (function () {
//   var whiteboard = window.whiteboard;
//   var socket = window.io(window.location.origin);

// variables para crear el bundle.js
  // const whiteboard = require('./whiteboard'); // comon JS
  // const io = require('socket.io-client'); // comon JS
  import  whiteboard from './whiteboard'; // ES6
  import io from 'socket.io-client'; // ES6
  const socket = io(window.location.origin);

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

// })();
