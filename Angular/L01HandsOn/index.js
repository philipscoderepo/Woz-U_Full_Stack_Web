"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Sending message to " + this.firstName + " at " + this.phoneNumber);
    };
    return ContactCard;
}());
var contact = new ContactCard('Henry', 9165895123);
contact.sendMessage();
