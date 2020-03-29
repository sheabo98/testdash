cube(`Orders`, {
  sql: `SELECT * FROM classicmodels.payments`,
  
  refreshKey: {
    every: `1 second`
  },
  joins: {
    
  },
  
  measures: {
    totalAmount: {
      sql: `${CUBE}.\`amount\``,
      type: `sum`
    }
  },
  
  dimensions: {
    orderdate: {
      sql: `${CUBE}.\`paymentDate\``,
      type: `time`
    }
  }
});
