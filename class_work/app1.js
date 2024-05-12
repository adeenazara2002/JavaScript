let gender = prompt("Enter gender");
if (gender === "girl") {
  let age = prompt("Enter age");
  if (age <= 15) {
    let grade = prompt("Enter grade");
    if (grade === "A") {
      alert("Admission done");
    } else {
      alert("Grade must be A");
    }
  } else {
    alert("Age is higher");
  }
} else {
  alert("It should be girl");
}
