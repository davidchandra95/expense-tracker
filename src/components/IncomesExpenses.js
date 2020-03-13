import React from 'react'

export const IncomesExpenses = () => {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Incomes</h4>
          <p className="money plus">Rp. 0.00</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p className="money minus">Rp. 0.00</p>
        </div>
      </div>
    </div>
  )
}
