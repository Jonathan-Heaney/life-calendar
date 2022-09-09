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
  for (let i = 0; i < 52 * 12; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('childhood', 'bubble');
    childhoodContainer.append(bubble);
  }
}

function adolescenceBubbles() {
  for (let i = 0; i < 52 * 7; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('adolescence', 'bubble');
    adolescenceContainer.append(bubble);
  }
}

function earlyAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('early-adulthood', 'bubble');
    earlyAdulthoodContainer.append(bubble);
  }
}

function middleAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('middle-adulthood', 'bubble');
    middleAdulthoodContainer.append(bubble);
  }
}

function matureAdulthoodBubbles() {
  for (let i = 0; i < 52 * 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('mature-adulthood', 'bubble');
    matureAdulthoodContainer.append(bubble);
  }
}

function lateAdulthoodBubbles() {
  for (let i = 0; i < 52 * 21; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('late-adulthood', 'bubble');
    lateAdulthoodContainer.append(bubble);
  }
}

childhoodBubbles();
adolescenceBubbles();
earlyAdulthoodBubbles();
middleAdulthoodBubbles();
matureAdulthoodBubbles();
lateAdulthoodBubbles();
