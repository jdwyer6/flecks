let tickets = []
let invoiceNum = 1;
const purchaseRow = document.querySelector(".purchaseRow")
const table = document.querySelector(".table")

document.querySelector(".invoiceNum").innerHTML = invoiceNum;

function saveData(){
    let date = document.querySelector('.date').value
    let fname = document.querySelector('.fname').value
    let lname = document.querySelector('.lname').value
    let address = document.querySelector('.address').value
    let model = document.querySelector('.model').value
    let description = document.querySelector('.description').value
    let qty = document.querySelector('.qty').value
    let price = document.querySelector('.price').value
    let notes = document.querySelector('.notes').value

    let purchases = {iNum:invoiceNum, date:date, fname: fname, lname:lname, address:address, model:model, description:description, qty:qty, price:price, notes: notes}
    invoiceNum += 1;


    tickets.push(purchases)
    console.log("Tickets = " + tickets[0].fname)
}

function saveStorage(){
    var storageTickets = JSON.stringify(tickets)
    localStorage.setItem("tickets", storageTickets)
}

function logStorage(){
    var localS = JSON.parse(localStorage.getItem('tickets'))
    console.log(localS)
}

function addRow(){
   var y = table.insertRow()
   y.innerHTML = "new thing"
}

function addTickets(){
    tickets.forEach(element => {
        var localS = JSON.parse(localStorage.getItem('tickets'))
        const allTicketsSection = document.querySelector('.allTickets')
    
        const ticketsContainer = document.createElement("div")
        container.classList.add('ticketsContainer')
        document.allTicketsSection.appendChild(ticketsContainer)
    });
}





var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// var formData = new FormData(document.querySelector('form'))

// 1Yp4VGfdghOaXJPUIlZczqOenETU1vvzOAxOCIu_9rjY