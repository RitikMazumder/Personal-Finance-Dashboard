import { useState } from 'react'
import Header from './components/Header'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import BudgetPlanner from './components/BudgetPlanner'
import SavingsGoals from './components/SavingGoals'
import DashboardSummary from './components/DashboardSummary'

function App() {
  const [transactions, setTransactions] = useState([])
  const [budgets, setBudgets] = useState({})
  const [goals, setGoals] = useState([])

  return (
    <div className="container">
      <Header />
      <DashboardSummary transactions={transactions} goals={goals} />
      <TransactionForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} />
      <BudgetPlanner budgets={budgets} setBudgets={setBudgets} />
      <SavingsGoals goals={goals} setGoals={setGoals} />
    </div>
  )
}

export default App