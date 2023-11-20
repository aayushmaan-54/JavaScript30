"use strict";

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    console.log(now);
    const seconds = now.getSeconds();
    const secondsToDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsToDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesToDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesToDegree}deg)`;

    const hours = now.getMinutes();
    const hoursToDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursToDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();

// TODO: when sec hits 60 sec it looks wiered