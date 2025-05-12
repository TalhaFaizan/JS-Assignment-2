let correctEmail = "user@gmail.com";
let correctPassword = "12345";

let email = prompt("Enter your email:");

if (email === correctEmail) {
  let attempts = 3;
  while (attempts > 0) {
    let password = prompt("Enter your password:");
    if (password === correctPassword) {
      document.write('<h1 style="font-size: 60px; text-align: center; color: red;">Welcome</h1>');
      break;
    } else {
      attempts--;
      if (attempts > 0) {
        alert("Wrong password! Attempts left: " + attempts);
      } else {
        alert("You have used all attempts. Access denied.");
      }
    }
  }
} else {
  alert("Invalid email.");
}
