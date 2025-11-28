//trades will be the array where I will store my data
const trades = [];

const addTradeBtn = document.querySelector("#addTradeBtn");

const pairInput = document.querySelector("#pair");
const entryInput = document.querySelector("#tradeEntry");
const exitInput = document.querySelector("#tradeExit");
const lotSize = document.querySelector("#lotSize");



addTradeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTrades();
});

function addTrades(){
    const newTrade = {
        pair: pairInput.value,
        entry: entryInput.value,
        exit: exitInput.value,
        lotSize: lotSize.value
    };

    trades.push(newTrade);

    pairInput.value = "";
    entryInput.value = "";
    exitInput.value = "";
    lotSize.value = "";
}



