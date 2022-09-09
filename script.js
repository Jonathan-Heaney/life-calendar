'use strict';

const bubbleContainer = document.querySelector('#bubble-container');

function createBubbles() {
  bubbleContainer.style.gridTemplateRows = `repeat(52, 1fr)`;
  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 100; j++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubbleContainer.append(bubble);
    }
  }
}

createBubbles();
