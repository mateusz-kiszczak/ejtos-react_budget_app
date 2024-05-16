import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = () => {
        // Count total expenses
        let total = 0;
        for (const key of Object.keys(expenses)) {
            total += expenses[key]["cost"];
        }
        return total;
    }
    const handleBudgetChange = (event) => {
        // Do not allow budget value larger than 20,000
        if (event.target.value > 20000) {
            alert("The budget cannot exceed 20,000");
        // Do not allow budget value smaller than "spendings"
        } else if (totalExpenses() > event.target.value) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget ? newBudget : budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
