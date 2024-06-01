// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let userPass = prompt("Enter password");
let isPassSet = false;

if (userPass.length >= 6) {
    if (!(userPass.charCodeAt(0) >= 48 && userPass.charCodeAt(0) <= 57)) {
        let hasAlphabet = false;
        let hasNumber = false;

        for (let i = 0; i < userPass.length; i++) {
            let charCode = userPass.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasAlphabet = true;
            }
            if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }

        if (hasAlphabet && hasNumber) {
            isPassSet = true;
        }
    }
}

if (isPassSet) {
    alert('Password set successfully');
} else {
    alert('Enter a valid password');
}
