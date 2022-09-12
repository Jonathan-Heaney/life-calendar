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

const bubbles = document.querySelectorAll('.bubble');

function childhoodBubbles() {
  for (let i = 0; i < 52 * 12; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('childhood', 'bubble');
    bubble.setAttribute('id', `${i + 1}`);
    childhoodContainer.append(bubble);
  }
}

function adolescenceBubbles() {
  for (let i = 0; i < 52 * 7; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('adolescence', 'bubble');
    bubble.setAttribute('id', `${i + 625}`);
    adolescenceContainer.append(bubble);
  }
}

function earlyAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('early-adulthood', 'bubble');
    bubble.setAttribute('id', `${i + 989}`);
    earlyAdulthoodContainer.append(bubble);
  }
}

function middleAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('middle-adulthood', 'bubble');
    bubble.setAttribute('id', `${i + 1769}`);
    middleAdulthoodContainer.append(bubble);
  }
}

function matureAdulthoodBubbles() {
  for (let i = 0; i < 52 * 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('mature-adulthood', 'bubble');
    bubble.setAttribute('id', `${i + 2549}`);
    matureAdulthoodContainer.append(bubble);
  }
}

function lateAdulthoodBubbles() {
  for (let i = 0; i < 52 * 21; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('late-adulthood', 'bubble');
    bubble.setAttribute('id', `${i + 4109}`);
    lateAdulthoodContainer.append(bubble);
  }
}

childhoodBubbles();
adolescenceBubbles();
earlyAdulthoodBubbles();
middleAdulthoodBubbles();
matureAdulthoodBubbles();
lateAdulthoodBubbles();

console.log(bubbles);

function getBirthdate() {
  let birthdate = document.getElementById('birthdate').value;
}

const milliInADay = 1000 * 60 * 60 * 24;
let weeks;

function getAge() {
  let birthdate = new Date(document.getElementById('birthdate').value);
  let today = new Date().getTime();
  let age = today - birthdate.getTime();
  let days = Math.floor(age / milliInADay);
  weeks = Math.floor(days / 7);
  if (age < 0) {
    alert('Enter a real birthday!');
  } else {
    console.log(birthdate, today, age, days, weeks);
  }
}

function fillBubbles() {
  getAge();
  for (let i = 1; i < weeks; i++) {
    const filledBubbles = document.getElementById(`${i}`);
    if (i > 4108) {
      filledBubbles.style.backgroundColor = '#22c55e';
    } else if (i > 2548) {
      filledBubbles.style.backgroundColor = '#38bdf8';
    } else if (i > 1768) {
      filledBubbles.style.backgroundColor = '#9333ea';
    } else if (i > 988) {
      filledBubbles.style.backgroundColor = '#e879f9';
    } else if (i > 624) {
      filledBubbles.style.backgroundColor = '#ea580c';
    } else {
      filledBubbles.style.backgroundColor = '#eab308';
    }
  }
}
