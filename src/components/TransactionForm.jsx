import { useState } from 'react'

function TransactionForm({ setTransactions }) {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  function handleSubmit(e) {
    e.preventDefault()
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type
    }
    setTransactions(prev => [...prev, newTransaction])
    setText('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Description" value={text} onChange={e => setText(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

export default TransactionForm