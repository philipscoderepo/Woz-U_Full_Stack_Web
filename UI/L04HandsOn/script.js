class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }  

    jobDescription(){
        console.log('Name: ' + this.name + ', Hire Date: ' + this.hireDate + ', Salary: ' + this.salary + ', Job Description: ' + this.descriptionOfJob);
      }
  }

  class Designer extends Employee{
    constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
    }  

    yearsExperience(){
        console.log('Name: ' + this.name + ', Hire Date: ' + this.hireDate + ', Salary: ' + this.salary + ', Experience: ' + this.experience);
      }
  }

  class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }  

    degreeCompleted(){
        console.log('Name: ' + this.name + ', Hire Date: ' + this.hireDate + ', Salary: ' + this.salary + ', Degrees: ' + this.degrees);
    }
}

let m = new Manager("James Gunn", 90000, "10/17/2020", "Film director");
let d = new Designer("Virgil Abloh", 1000000, "1/18/1999", "10 years");
let s = new SalesAssociate("Don Johnson", 150000, "5/12/2012", "Bachelors of Science");

m.jobDescription();
d.yearsExperience();
s.degreeCompleted();


