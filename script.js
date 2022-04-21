const tickets = []
let invoiceNum = 1;
const purchaseRow = document.querySelector(".purchaseRow")
const table = document.querySelector(".table")

document.querySelector(".invoiceNum").innerHTML = invoiceNum;

function saveData(){
    let fname = document.querySelector('.fname').value
    let lname = document.querySelector('.lname').value
    let address = document.querySelector('.address').value
    let model = document.querySelector('.model').value
    let description = document.querySelector('.description').value
    let qty = document.querySelector('.qty').value
    let price = document.querySelector('.price').value
    let notes = document.querySelector('.notes').value

    let purchases = {iNum:invoiceNum, fname: fname, lname:lname, address:address, model:model, description:description, qty:qty, price:price}
    tickets.push(purchases)

    console.log(tickets[0].iNum)
    invoiceNum += 1;

}


function addRow(){
   var y = table.insertRow()
   y.innerHTML = "new thing"
}






var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// var formData = new FormData(document.querySelector('form'))

// 1Yp4VGfdghOaXJPUIlZczqOenETU1vvzOAxOCIu_9rjY