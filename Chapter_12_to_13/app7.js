// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time24 = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");

time24 = parseInt(time24);

if (isNaN(time24) || time24 < 0 || time24 > 2359 || time24 % 100 >= 60) {
    alert("Invalid input. Please enter a valid time in 24-hour format.");
} else {
    let hours = Math.floor(time24 / 100);
    let minutes = time24 % 100;
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;

    alert(`The time in 12-hour format is ${hours}:${minutesStr} ${period}`);
}

