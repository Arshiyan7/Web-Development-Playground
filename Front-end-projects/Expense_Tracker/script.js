const balanceEl = document.querySelector("#balance")
const incomeAmountEl = document.querySelector("#income-amount")
const expenseAmountEl = document.querySelector("#expense-amount")
const transactionFormEl = document.querySelector("#transaction-form")
const transactionlistEl = document.querySelector("#transaction-list")
const descriptionEl = document.querySelector("#description")
const amountEl = document.querySelector("#amount")

// Get what's in local storage if something('transaction') if empty []
const transactions = JSON.parse(localStorage.getItem('transactions')) || []

transactionFormEl.addEventListener('submit',addTransaction)

function addTransaction(e){
    e.preventDefault()

    // get values from form
    const description = descriptionEl.value.trim()
    const amount = parseFloat(amountEl.value) // here we use parse.float to get values in float form because by default values are in string form
    //  console.log(typeof amount) //use this in order to check for the type of amount before and after removing parse.float
    transactions.push({
        id:Date.now(),
        description,
        amount
    })

    localStorage.setItem('transactions',JSON.stringify(transactions))

    updateTransactionList()
    updateSummary()

    transactionFormEl.reset()
}

function updateTransactionList(){
    transactionlistEl.innerHTML = ""
    
    const sortedTransactions = [...transactions].reverse()
}