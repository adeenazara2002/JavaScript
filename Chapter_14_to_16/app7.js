//  7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let educationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PhD"];
document.write("<h2>Qualifications</h2><br>");
for (let i = 0; i < educationArr.length; i++) {
  document.write(educationArr[i]+"<br>");
}
