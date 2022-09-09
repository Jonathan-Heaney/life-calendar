'use strict';

const childhoodContainer = document.querySelector('#childhood-container');
const adolescenceContainer = document.querySelector('#adolescence-container');
const earlyAdulthoodContainer = document.querySelector(
  '#early-adulthood-container'
);
const middleAdulthoodContainer = document.querySelector(
  '#middle-adulthood-container'
);
const matureAdulthoodContainer = document.querySelector(
  '#mature-adulthood-container'
);
const lateAdulthoodContainer = document.querySelector(
  '#late-adulthood-container'
);

function childhoodBubbles() {
  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 12; j++) {
      const bubble = document.createElement('div');
      bubble.classList.add('childhood-bubble');
      childhoodContainer.append(bubble);
    }
  }
}

function adolescenceBubbles() {
  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 7; j++) {
      const bubble = document.createElement('div');
      bubble.classList.add('adolescence-bubble');
      adolescenceContainer.append(bubble);
    }
  }
}

childhoodBubbles();
adolescenceBubbles();
