const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

// Adicionar transações
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum = sum + transaction.value
    }
    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }
    return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 150 })
createTransaction({ type: 'credit', value: 100 })
createTransaction({ type: 'credit', value: 94 })

createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(`Balance: ${user.balance}`) // 284

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 150 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(`Average Transaction: ${getAverageTransactionValue()}`) // 84

console.log(getTransactionsCount()) // { credit: 4, debit: 2 }