const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



var date = new Date()
// Use get method to extract details from date, eg hr, min, seconds
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

// Will contain the degrees we want arms to move
let hrPosition = 20
let minPosition = 130
let secPosition = 267

// Degrees for inline styles for transform on each of the objects
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
