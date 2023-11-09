"use strict";
/// <reference path="index.ts" />
class Courier {
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        if (this.placesToVisit.some((x) => Object.keys(x)[0] === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        for (const customer of this.placesToVisit) {
            console.log(customer.customerName);
        }
    }
    showCustomers() {
    }
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
