//trades will be the array where I will store my data
const trades = [];

const addTradeBtn = document.querySelector("#addTradeBtn");
const inputs = document.querySelectorAll("input");



addTradeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTrades();
});

function addTrades(){
    const newTrade = {};
    inputs.forEach(item => {
        newTrade[item.name] = item.value;
        item.value = "";
    });

    trades.push(newTrade);
};

