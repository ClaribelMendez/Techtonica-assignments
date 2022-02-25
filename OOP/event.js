class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
        this.addAvailableTickets = function (type, price) {
            let tickettype1 = new TicketType(
                type, price
            )
            this.availableTickets.push(tickettype1)
        }
        this.allTickets = function () {
            let string;
            // console.log(this.availableTickets)
            for (let i = 0; i < this.availableTickets.length; i++){
                string += "All tickets: " + i + 1 + ". " + this.availableTickets[i].tickettype + "($" + this.availableTickets[i].price + ") "
            }
            return string
        }

    }
}

// Add a function to Event called allTickets that returns a string representing all ticket types and prices, like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)

class TicketType {
    constructor(tickettype, price) {
        this.tickettype = tickettype;
        this.price = price;

    }
}



const eventObj1 = new Event(
    'KLOS Golden Gala',
    'A evening with hollywood vampires'
);

const eventObj2 = new Event(
    'Skillet & Sevendust', 'Victorious war tour'
);

const eventObj3 = new Event(
    'Jenny Lewis', 'On the line tour 2019'
);


const eventArray = new Array();

eventArray.push(eventObj1, eventObj2, eventObj3);



document.addEventListener('DOMContentLoaded', () => {
    let html = "";
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
    console.log("test")
});









eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)


console.log(eventObj1.allTickets());
console.log(eventObj2.allTickets())