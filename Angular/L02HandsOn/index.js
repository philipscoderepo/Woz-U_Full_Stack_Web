"use strict";
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(date);
        console.log("First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Birthday: " + this.birthday);
    }
    return Entry;
}());
var entry = new Entry('Albert', 'Einstein', '5/14/1879');
//Part 2
function sortArray(numbers) {
    numbers.sort();
}
var numbers = [
    'twelve', 'one-hundred',
    'sixteen', 'forty-four',
    'seventy-three', 'three-million'
];
console.log("Before sorting: " + numbers);
sortArray(numbers);
console.log("After sorting: " + numbers);
