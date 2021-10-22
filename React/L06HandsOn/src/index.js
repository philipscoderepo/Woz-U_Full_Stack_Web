var filtered = car => {
    return car.name === 'ford';
};

const arr = [
    { name: 'chevy', count: 2 },
    { name: 'ford', count: 5 },
    { name: 'acura', count: 3 },
    { name: 'honda', count: 16 }
].filter(filtered);
  
console.log("Filter results:", arr);
  
const arr2 = ['Bill', 'Joe', 'Emily', 'Andrea'];
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const fullArray = [...arr2, ...newStudents];

console.log(fullArray);