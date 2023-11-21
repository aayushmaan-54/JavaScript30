"use strict";

const inputs = document.querySelectorAll('.controls input');
console.log(inputs)

function handelUpdate() {
    const suffix = this.dataset.sizing || " "; // this.dataset include obj with all data- attribute in particular html element
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handelUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handelUpdate));