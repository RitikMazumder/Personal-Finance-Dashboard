function BudgetPlanner({ budgets, setBudgets }) {
  function handleChange(category, value) {
    setBudgets(prev => ({ ...prev, [category]: parseFloat(value) }))
  }

  return (
    <div>
      <h3>Budget Planner</h3>
      <label>Groceries: ₹</label>
      <input type="number" onChange={e => handleChange('groceries', e.target.value)} />
      <label>Entertainment: ₹</label>
      <input type="number" onChange={e => handleChange('entertainment', e.target.value)} />
    </div>
  )
}

export default BudgetPlanner