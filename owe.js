let objectArray = [ { name: "Chuy", spent: 1825 }, 
                    { name: "Ayon", spent: 740 },
                    { name: "Angel", spent: 1000 },
                    { name: "Luis", spent: 2828 },
                    { name: "Fer", spent: 2470 },
                    { name: "German", spent: 230 },
                    { name: "Dompo", spent: 870 },
                    { name: "Bryan", spent: 170 },
                    { name: "Kevin", spent: 1512 },
                    { name: "Juani", spent: 0 },
                    { name: "Garcia", spent: 1579 },
                    { name: "Alarid", spent: 0 } ];

let totalSpent = objectArray.reduce((total, person) => total + person.spent, 0);
console.log("total gastado = " + totalSpent);

let balance = objectArray.map(person => { return { name: person.name, balance: person.spent - (totalSpent / objectArray.length) } });
console.log(balance);

function calculateDebts(balance) {
    let debts = [];
    let sortedBalance = balance.sort((a, b) => a.balance - b.balance);
    let i = 0;
    let j = sortedBalance.length - 1;
    while (i < j) {
        let min = sortedBalance[i];
        let max = sortedBalance[j];
        let debt = Math.min(-min.balance, max.balance);
        debts.push({ from: min.name, to: max.name, amount: debt });
        min.balance += debt;
        max.balance -= debt;
        if (min.balance === 0) {
            i++;
        }
        if (max.balance === 0) {
            j--;
        }
    }
    return debts;
}

let debts = calculateDebts(balance);
console.log(debts);
