// Get Elements 
const timeElement =document.getElementById('time')
const dateElement =document.getElementById('date')
const greetingElement =document.getElementById('greeting')

// function to update time and date
function updateClock() {
    const now = new Date();

    //  Time
    let hours =now.getHours();
    let minutes =now.getMinutes();
    let seconds =now.getSeconds();
    
       // greeting
    let greetingText = "" ; 
    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning, Huzaifa";
    } else if (hours >12 && hours < 17) {
        greetingText = "Good Afternoon, Huzaifa";
    } else if (hours >= 17 && hours < 21) {
        greetingText = "Good Evening, Huzaifa";
    } else {
        greetingText = "Developer Mode Active (Night)";
    }
    greetingElement.textContent = greetingText;


    // add lending zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes: minutes;
    seconds = seconds < 10 ? '0' + seconds: seconds;

    // set time
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    // Date
    const option = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        };
        dateElement.textContent =now.toLocaleDateString('en-US', option);
}
// update immediately
updateClock();

// update every second
setInterval(updateClock,1000);