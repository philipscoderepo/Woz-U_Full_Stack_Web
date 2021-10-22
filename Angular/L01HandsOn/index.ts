interface Person{
    firstName: string;
    lastName?: string;
}

interface Contact{
    phoneNumber: number;
    email?: string;
}

class ContactCard implements Person, Contact{
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string, phoneNumber: number){
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }

    sendMessage(): void{
        console.log("Sending message to " + this.firstName + " at " + this.phoneNumber);
    }
}

let contact = new ContactCard('Henry', 9165895123);
contact.sendMessage();