// Define the degrees for each unit of time (hour, minute, second)
const deg = 6;

// Select the elements representing the hour, minute, and second hands
const hr = document.querySelector('#hr'); // Hour hand
const mn = document.querySelector('#mn'); // Minute hand
const sc = document.querySelector('#sc'); // Second hand

// Update the clock every second
setInterval(() => {
    // Get the current date and time
    let day = new Date();
    
    // Calculate the rotation angle for the hour hand (360 degrees / 12 hours)
    let hh = day.getHours() * 30;

    // Calculate the rotation angle for the minute hand (6 degrees / minute)
    let mm = day.getMinutes() * deg;

    // Calculate the rotation angle for the second hand (6 degrees / second)
    let ss = day.getSeconds() * deg;

    // Apply the rotation transformation to the hour, minute, and second hands
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Include minute rotation in hour hand
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});