function DashboardSummary({ transactions, goals }) {
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  const savings = income - expenses

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ₹{income}</p>
      <p>Total Expenses: ₹{expenses}</p>
      <p>Net Savings: ₹{savings}</p>
    </div>
  )
}

export default DashboardSummary