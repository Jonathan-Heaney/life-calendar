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

function addTooltip() {
  const tooltipText = document.createElement('span');
  tooltipText.classList.add('tooltiptext');
  bubble.appendChild(tooltipText);
  tooltipText.innerText = `Week ${i + 1}`;
}

function childhoodBubbles() {
  for (let i = 0; i < 52 * 12; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('childhood', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 1}`;
    bubble.setAttribute('id', `${i + 1}`);
    childhoodContainer.append(bubble);
  }
}

function adolescenceBubbles() {
  for (let i = 0; i < 52 * 7; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('adolescence', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 625}`;
    bubble.setAttribute('id', `${i + 625}`);
    adolescenceContainer.append(bubble);
  }
}

function earlyAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('early-adulthood', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 989}`;
    bubble.setAttribute('id', `${i + 989}`);
    earlyAdulthoodContainer.append(bubble);
  }
}

function middleAdulthoodBubbles() {
  for (let i = 0; i < 52 * 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('middle-adulthood', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 1769}`;
    bubble.setAttribute('id', `${i + 1769}`);
    middleAdulthoodContainer.append(bubble);
  }
}

function matureAdulthoodBubbles() {
  for (let i = 0; i < 52 * 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('mature-adulthood', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 2549}`;
    bubble.setAttribute('id', `${i + 2549}`);
    matureAdulthoodContainer.append(bubble);
  }
}

function lateAdulthoodBubbles() {
  for (let i = 0; i < 52 * 21; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('late-adulthood', 'bubble', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltiptext');
    bubble.appendChild(tooltipText);
    tooltipText.innerText = `Week ${i + 4109}`;
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
      filledBubbles.style.backgroundColor = 'rgba(34, 197, 94, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(34, 197, 94, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(34, 197, 94, .5)';
      };
    } else if (i > 2548) {
      filledBubbles.style.backgroundColor = 'rgba(56, 189, 248, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(56, 189, 248, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(56, 189, 248, .5)';
      };
    } else if (i > 1768) {
      filledBubbles.style.backgroundColor = 'rgba(147, 51, 234, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(147, 51, 234, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(147, 51, 234, .5)';
      };
    } else if (i > 988) {
      filledBubbles.style.backgroundColor = 'rgba(232, 121, 249, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(232, 121, 249, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(232, 121, 249, .5)';
      };
    } else if (i > 624) {
      filledBubbles.style.backgroundColor = 'rgba(234, 88, 12, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(234, 88, 12, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(234, 88, 12, .5)';
      };
    } else {
      filledBubbles.style.backgroundColor = 'rgba(234, 179, 8, .5)';
      filledBubbles.onmouseover = function () {
        this.style.backgroundColor = 'rgba(234, 179, 8, 1)';
      };
      filledBubbles.onmouseleave = function () {
        this.style.backgroundColor = 'rgba(234, 179, 8, .5)';
      };
    }
  }
}
