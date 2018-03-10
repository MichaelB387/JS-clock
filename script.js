const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date()
console.log(date)
// Use get method to extract details from date, eg hr, min, seconds
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
console.log("Hour: " + hr + " Minute: " + min + " Seconds: " + sec )

// Will contain the degrees we want arms to move
//calculation for hour hand
let hrPosition = (hr*360/12) + (min*(360/60)/12)
// calculation for minute hand 360 degress 60 is minutes then sec broken down into segments
let minPosition = (min*360/60)+(sec*(360/60)/60)
// calculation for second hand 
let secPosition = sec*360/60

function runTheClock() {
    hrPosition = hrPosition + (3/360)
                            //one sixtieth degree of the second hand
    minPosition = minPosition + (6/60)
                            // degrees per second
    secPosition = secPosition + 6


    // Degrees for inline styles for transform on each of the objects
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}

//using set interval method-------------this is 1000 milliseconds which is one second interval the function will be run
// So every second the functon will be run
var interval = setInterval(runTheClock, 1000)
