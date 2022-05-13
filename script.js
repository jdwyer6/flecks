const sTicks = localStorage.getItem('tickets')
let invoiceNum

if(sTicks){
    tickets = JSON.parse(localStorage.getItem("tickets"))
    invoiceNum = tickets.at(-1).iNum + 1
}else{
    tickets = []
    invoiceNum = 1;
}

console.log(invoiceNum)
const purchaseRow = document.querySelector(".purchaseRow")
const table = document.querySelector(".table")

document.querySelector(".invoiceNum").innerHTML = invoiceNum;

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

    let purchase = {iNum:invoiceNum, date:date.value, fname:fname.value, lname:lname.value, address:address.value, model:model.value, description:description.value, qty:qty.value, price:price.value, notes:notes.value}
    
    
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
    var model = document.querySelector('.model')
    var description = document.querySelector('.description')
    var qty = document.querySelector('.qty')
    var price = document.querySelector('.price')
   var row = table.insertRow()
   row.classList.add('purchaseRow')
   var cell1 = row.insertCell(0)
   var cell2 = row.insertCell(1)
   var cell3 = row.insertCell(2)
   var cell4 = row.insertCell(3)
   cell1.innerHTML = model.outerHTML
   cell2.innerHTML = description.outerHTML
   cell3.innerHTML = qty.outerHTML
   cell4.innerHTML = price.outerHTML
//    row.innerHTML = 'new thing'
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

                                // Unhide Preview Window
            let currentCustomer = document.querySelector('.preview')
            currentCustomer.classList.remove('hidden')

                                //Grab index of current customer
            let num = customers.indexOf(customer)

                                //Grab customer information and purchases
            let name = x[num].fname + " " + x[num].lname
            let iNumber = x[num].iNum
            let date = x[num].date
            let address = x[num].address
            let model = x[num].model
            let description = x[num].description
            let qty = x[num].qty
            let price = x[num].price
            let notes = x[num].notes
            
                                //Set inner HTML to customer info
            document.querySelector(".previewCustomerName").innerHTML = name
            document.querySelector('.iNumber').innerHTML = iNumber
            document.querySelector(".previewDate").innerHTML = date
            document.querySelector(".previewAddress").innerHTML = address
            document.querySelector(".previewModel").innerHTML = model
            document.querySelector(".previewDescription").innerHTML = description
            document.querySelector(".previewQty").innerHTML = qty
            document.querySelector(".previewPrice").innerHTML = price
            document.querySelector(".previewNotes").innerHTML = notes

            let deleteButton = document.querySelector(".xButton")
            deleteButton.addEventListener("click", function(){
                x.splice(num, 1)
                storeTickets = JSON.stringify(x)
                localStorage.setItem("tickets", storeTickets)
                closePreview()
                document.location.reload(true)
            })
        })
    })

}

function closePreview(){
    let currentCustomer = document.querySelector('.preview')
    currentCustomer.classList.add('hidden')
}  

function print(){
    window.print();
}

function search(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    li = document.querySelectorAll(".newDiv");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}

