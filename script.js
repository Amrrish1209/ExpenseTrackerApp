const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

let expenses = [];

function addExpense(e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  const expense = {
    id: expenses.length + 1,
    amount: amount,
    description: description,
    category: category,
  };

  expenses.push(expense);

  showExpenses();
  expenseForm.reset();
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  showExpenses();
}

function editExpense(id) {
  const expense = expenses.find((expense) => expense.id === id);
  document.getElementById("amount").value = expense.amount;
  document.getElementById("description").value = expense.description;
  document.getElementById("category").value = expense.category;

  expenses = expenses.filter((expense) => expense.id !== id);
  showExpenses();
}

function showExpenses() {
  let html = "";

  expenses.forEach((expense) => {
    html += `
      <div class="card mb-3">
        <div class="card-body">
        <p class="card-text"><strong>Amount:</strong> $${expense.amount}</p>
        <p class="card-text"><strong>Description:</strong> ${expense.description}</p>
        <p class="card-text"><strong>Category:</strong> ${expense.category}</p>
          <button type="button" class="btn btn-danger mr-2" onclick="deleteExpense(${expense.id})">Delete</button>
          <button type="button" class="btn btn-secondary" onclick="editExpense(${expense.id})">Edit</button>
        </div>
      </div>
    `;
  });

  expenseList.innerHTML = html;
}

showExpenses();

expenseForm.addEventListener("submit", addExpense);
