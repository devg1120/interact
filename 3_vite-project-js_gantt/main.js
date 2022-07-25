import interact from 'interactjs';

import './style.css'

let  days= 0;
let  duration= 2;
let  ganttStart= new Date('2019-11-28');

const position = { x: 0, y: 0 };

    interact(".draggable")
    .draggable({
      origin: 'parent',
	        inertia: true,

      listeners: {
        start(event) {
        },
        move: (event) => {
          position.x += event.dx;
          event.target.style.left = position.x + 'px'
          //this.days = Math.round(position.x / 50)
          days = Math.round(position.x / 50)
        }
      },
	    /* // DRAF SNAP
      modifiers: [
        interact.modifiers.snap({
          targets: [
            interact.createSnapGrid({
              x: 50,
              y: 50
            })
          ],
          range: Infinity,
          relativePoints: [ { x: 0, y: 0 } ]
        }),
      ]
      */
    })
    .resizable({
      edges: {
        left: true,
        right: true
      },
    inertia: {
      resistance: 500,
      minSpeed: 500,
      endSpeed: 300
    }
    , /* RESIZE SNAP
      modifiers: [
        interact.modifiers.snapSize({
          targets: [
            interact.createSnapGrid({ width: 50, height: 50 })
          ]
        })
      ]
      */
    }
    
    )
    .on('resizemove', (event) => {
      position.x += event.deltaRect.left
      
      event.target.style.width = event.rect.width + 'px'
      event.target.style.left = position.x + 'px'
      //this.duration = Math.round(event.rect.width / 50)
      duration = Math.round(event.rect.width / 50)
    })

