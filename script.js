const sTicks = localStorage.getItem('tickets')
if(sTicks){
    tickets = JSON.parse(localStorage.getItem("tickets"))
}else{
    tickets = []
}

let invoiceNum = 1;
const purchaseRow = document.querySelector(".purchaseRow")
const table = document.querySelector(".table")

// document.querySelector(".invoiceNum").innerHTML = invoiceNum;

function saveData(){

    let date = document.querySelector('.date')
    let fname = document.querySelector('.fname')
    let lname = document.querySelector('.lname')
    let address = document.querySelector('.address')
    let model = document.querySelector('.model')
    let description = document.querySelector('.description')
    let qty = document.querySelector('.qty')
    let price = document.querySelector('.price')
    let notes = document.querySelector('.notes')

    let purchase = {iNum:invoiceNum.value, date:date.value, fname:fname.value, lname:lname.value, address:address.value, model:model.value, description:description.value, qty:qty.value, price:price.value, notes:notes.value}
    invoiceNum += 1;
    
    
    tickets.push(purchase)

   
    storeTickets = JSON.stringify(tickets)
    localStorage.setItem("tickets", storeTickets)
    // window.location.href = "TEST.html"
}



function logStorage(){
    console.log(localStorage.getItem("tickets"))
}

function clearStorage(){localStorage.clear()}

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




// var form = document.getElementById("form");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);


// var formData = new FormData(document.querySelector('form'))

// 1Yp4VGfdghOaXJPUIlZczqOenETU1vvzOAxOCIu_9rjY


function displayTickets(){
    x = JSON.parse(localStorage.getItem('tickets'))
    console.log(x)
   
    
    for(let i=0; i<x.length; i++){

                                                                        // Create Div Container for each ticket
        let allTickets = document.querySelector(".allTickets")
        let div = document.createElement('div')
        div.classList.add('newDiv')
        allTickets.appendChild(div)

                                                                    // Fill in each container with customer info
        let fname = x[i].fname
        let lname = x[i].lname
        let date = x[i].date
        let inum = x[i].iNum

        let h = document.createElement('h3')
        h.classList.add('customerName')
        div.appendChild(h)
        h.innerHTML = fname + ' ' + lname

        let pdate = document.createElement('p')
        pdate.classList.add('date')
        div.appendChild(pdate)
        pdate.innerHTML = date

    }

    let customers = [...document.querySelectorAll('.newDiv')]
    customers.forEach((customer)=>{
        customer.addEventListener('click', function(){
            let currentCustomer = document.querySelector('.preview')
            currentCustomer.classList.remove('hidden')

            let name = customer.querySelector('.customerName').innerHTML

            document.querySelector(".previewCustomerName").innerHTML = name

        })
    })
    // tickets.forEach((tick)=>{
    //     console.log("for each" + tick.fname[i])
    // })

}

function closePreview(){
    let currentCustomer = document.querySelector('.preview')
    currentCustomer.classList.add('hidden')
}