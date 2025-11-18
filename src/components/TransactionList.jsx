function TransactionList({ transactions }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.text} - {tx.type === 'income' ? '+' : '-'}₹{tx.amount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList