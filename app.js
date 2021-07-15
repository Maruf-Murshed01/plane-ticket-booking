const firstClassMinusBtn = document.getElementById('firstClassMinusBtn');
const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
const economyMinusBtn = document.getElementById('economyMinusBtn');
const economyPlusBtn = document.getElementById('economyPlusBtn');

//firstClass ticket Increment
firstClassPlusBtn.addEventListener('click', function () {
    let firstClassTicketCount = Number(document.getElementById('firstClassTicketCount').value);
    firstClassTicketCount++;

    document.getElementById('firstClassTicketCount').value = firstClassTicketCount;

    let firstClassTicketPrice = (document.getElementById('firstClassTicketCount').textContent = firstClassTicketCount * 150);
    totalPrice();
});

// firstClass ticket Decrement
firstClassMinusBtn.addEventListener('click', function () {
    let firstClassTicketCount = Number(document.getElementById('firstClassTicketCount').value);
    firstClassTicketCount--;
    if (firstClassTicketCount < 0) {
        firstClassTicketCount = 0;
    }
    document.getElementById('firstClassTicketCount').value = firstClassTicketCount;

    let firstClassTicketPrice = (document.getElementById('firstClassTicketCount').textContent = firstClassTicketCount * 150);
    totalPrice();
});

// economy ticket Increment
economyPlusBtn.addEventListener('click', function () {
    let economyTicketCount = Number(document.getElementById('economyTicketCount').value);
    economyTicketCount++;

    document.getElementById('economyTicketCount').value = economyTicketCount;

    let economyTicketPrice = (document.getElementById('economyTicketCount').textContent = economyTicketCount * 100);
    totalPrice();
});

// economy ticket Increment
economyMinusBtn.addEventListener('click', function () {
    let economyTicketCount = Number(document.getElementById('economyTicketCount').value);
    economyTicketCount--;
    if (economyTicketCount < 0) {
        economyTicketCount = 0;
    }
    document.getElementById('economyTicketCount').value = economyTicketCount;

    let economyTicketPrice = (document.getElementById('economyTicketCount').textContent = economyTicketCount * 100);
    totalPrice();
});

//Total Price Count
function totalPrice() {
    let firstClassTicketPrice = Number(document.getElementById('firstClassTicketCount').textContent)
    let economyTicketPrice = Number(document.getElementById('economyTicketCount').textContent)
    let subtotal = (document.getElementById('subtotal').textContent = firstClassTicketPrice + economyTicketPrice);
    let vat =document.getElementById('vat').textContent = subtotal * 0.10
    let total = (document.getElementById('total').textContent = subtotal + vat);
}


document.getElementById('bookNow').addEventListener('click', function () {
    document.getElementById('main-content').style.display = "none";
    document.getElementById('memo-content').style.display = "block";
    memo()
});

function memo(){
    const from = document.getElementById("flying-from").value
    const memoContentFrom = document.getElementById("from").innerText = `From : ${from}`
    const to = document.getElementById("flying-to").value
    const memoContentTo = document.getElementById("to").innerText = `To : ${to}`
    const departureDate = document.getElementById("departure-date").value
    const memoContentFromDate = document.getElementById("from-date").innerText = `departure date: ${departureDate}`
    const returnDate = document.getElementById("return-date").value
    const memoContentToDate = document.getElementById("to-date").innerText = `return date: ${returnDate}`
    const firstClassSeat = Number(document.getElementById('firstClassTicketCount').value)
    const memoContentFirstClassSeat = document.getElementById("fClassSeat").innerText = `First class seat: ${firstClassSeat}`
    const economySeat = Number(document.getElementById('economyTicketCount').value);
    const memoContentEconomySeat = document.getElementById("eSeat").innerText = `Economy seat: ${economySeat}`
    const Total = firstClassSeat*150 + economySeat*100
    const subTotal = document.getElementById("subTotalmoney").innerText = `Subtotal : ${Total}`
    const vat = document.getElementById("total-vat").innerText = `Vat : ${Total * 0.10}`
    const finalTotal = document.getElementById("final-total").innerText = `Total : ${firstClassSeat*150 + economySeat*100 + Total*0.10}`
}

