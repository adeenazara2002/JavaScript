// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let itemFound = false;
let searchFromBakeryitems = prompt("Enter an item you are looking for").toLowerCase();
// searchFromBakeryitems.toLowerCase();
for (let i = 0; i < bakeryItems.length; i++) {
  if (searchFromBakeryitems === bakeryItems[i]) {
    alert(searchFromBakeryitems + " is found at index " + i);
    itemFound = true;
    break;
  }
}
if (!itemFound) {
  alert(
    "We are sorry " + searchFromBakeryitems + " is not available at our bakery "
  );
}
