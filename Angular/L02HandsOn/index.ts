//Part 1
interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person{
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, date: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(date);
        console.log("First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Birthday: " + this.birthday);
    }
}

let entry = new Entry('Albert', 'Einstein', '5/14/1879');

//Part 2
function sortArray<S>(numbers:string[]){
    numbers.sort();
}

var numbers: Array<string> = [
    'twelve', 'one-hundred',
    'sixteen', 'forty-four',
    'seventy-three', 'three-million'
];

console.log("Before sorting: " + numbers);
sortArray(numbers);
console.log("After sorting: " + numbers);
