import { useState } from 'react'

function SavingsGoals({ goals, setGoals }) {
  const [goalName, setGoalName] = useState('')
  const [target, setTarget] = useState('')

  function addGoal() {
    const newGoal = {
      id: Date.now(),
      name: goalName,
      target: parseFloat(target),
      saved: 0
    }
    setGoals(prev => [...prev, newGoal])
    setGoalName('')
    setTarget('')
  }

  return (
    <div>
      <h3>Savings Goals</h3>
      <input placeholder="Goal name" value={goalName} onChange={e => setGoalName(e.target.value)} />
      <input type="number" placeholder="Target amount" value={target} onChange={e => setTarget(e.target.value)} />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            {goal.name}: ₹{goal.saved} / ₹{goal.target}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SavingsGoals