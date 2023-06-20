// Bank class
class Bank {
    constructor() {
      this.customers = [];
    }
  
    createAccount(customer) {
      this.customers.push(customer);
      console.log(`Customer ${customer.id} has opened a ${customer.accountType} account.`);
    }
  
    applyForLoan(customer) {
      // Simulating loan approval (random for now)
      const isApproved = Math.random() >= 0.5;
  
      if (isApproved) {
        console.log(`Loan approved for customer ${customer.id}.`);
        customer.approvedLoanAmount = calculateLoanAmount(customer);
      } else {
        console.log(`Loan rejected for customer ${customer.id}.`);
      }
    }
  
    printCustomerStats() {
      const checkingAccounts = this.customers.filter(customer => customer.accountType === 'checking');
      const savingsAccounts = this.customers.filter(customer => customer.accountType === 'savings');
  
      console.log(`Number of customers with checking accounts: ${checkingAccounts.length}`);
      console.log(`Number of customers with savings accounts: ${savingsAccounts.length}`);
    }
  
    printLoanStats() {
      const approvedLoans = this.customers.filter(customer => customer.approvedLoanAmount > 0);
      const rejectedLoans = this.customers.filter(customer => customer.approvedLoanAmount === 0);
  
      console.log(`Number of approved loans: ${approvedLoans.length}`);
      console.log(`Number of rejected loans: ${rejectedLoans.length}`);
  
      console.log('Details of approved loans:');
      approvedLoans.forEach(customer => console.log(`Customer ${customer.id}: Loan amount - ${customer.approvedLoanAmount}`));
  
      console.log('Details of rejected loans:');
      rejectedLoans.forEach(customer => console.log(`Customer ${customer.id}: Loan rejected`));
    }
  }
  
  // Customer class
  class Customer {
    constructor(id, accountType, income, expenses) {
      this.id = id;
      this.accountType = accountType;
      this.income = income;
      this.expenses = expenses;
      this.approvedLoanAmount = 0;
    }
  
    deposit(amount) {
      console.log(`Customer ${this.id} deposited ${amount}.`);
    }
  
    withdraw(amount) {
      console.log(`Customer ${this.id} withdrew ${amount}.`);
    }
  
    payLoan(amount) {
      console.log(`Customer ${this.id} paid ${amount} towards their loan.`);
    }
  }
  
  // Helper function to calculate loan amount based on income and expenses
  function calculateLoanAmount(customer) {
    const monthlyExpenses = customer.expenses;
    const incomeToExpenseRatio = customer.income / monthlyExpenses;
  
    if (incomeToExpenseRatio > 0.36) {
      return 0; // Loan rejected
    }
  
    // Derive the loan amount based on income and expenses
    const loanAmount = customer.income - monthlyExpenses * 0.36;
    return loanAmount;
  }
  
  // Example usage
  const bank = new Bank();
  
  const customer1 = new Customer(1, 'checking', 5000, 2000);
  const customer2 = new Customer(2, 'savings', 6000, 2500);
  const customer3 = new Customer(3, 'checking', 4000, 1500);
  
  bank.createAccount(customer1);
  bank.createAccount(customer2);
  bank.createAccount(customer3);
  
  bank.printCustomerStats();
  
  customer1.deposit(1000);
  customer2.withdraw(500);
  
  bank.applyForLoan(Customer)
  