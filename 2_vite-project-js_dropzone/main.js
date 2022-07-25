import interact from 'interactjs';

import './style.css'


const position = { x: 0, y: 0 };

const draggableElement = document.querySelector(".draggable");
const droppableElement = document.querySelector(".dropzone");
const span = document.querySelector(".state");

interact(".draggable").draggable({
  listeners: {
    start(event) {
      // console.log(event.type, event.target);
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }
});

interact(".dropzone")
  .dropzone({
    ondrop: function (event) {
      draggableElement.style.background = "red";
      droppableElement.style.background = "#000";
      span.textContent = "INSIDE!";
    },
    ondragleave: function (event) {
      draggableElement.style.background = "#29e";
      droppableElement.style.background = "#bfe4ff";
      span.textContent = "OUTSIDE!";
    }
  })
  .on("dropactivate", function (event) {});

