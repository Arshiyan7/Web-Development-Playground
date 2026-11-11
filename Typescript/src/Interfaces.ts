type Status = 'paid' | 'pending' | 'failed'
interface Transaction {
    id : string,
    amount : number, 
    status : Status,
    note? : string
}

const transactions : Transaction[] = [
    {id : '1', amount : 23, status : 'pending'},
    {id : '2', amount : 23, note : "Object with note value", status : 'paid'}
]
function isPaid(t : Transaction) : boolean{
    return t.status === 'paid'
}

console.log(isPaid(transactions[1]))
