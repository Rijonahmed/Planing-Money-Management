function incomeAmount() {
  const incomeInput = document.getElementById('income-input');
  const incomeInputText = incomeInput.value;
  const incomeInputNumber = parseFloat(incomeInputText);
  return incomeInputNumber;

}

function ExpensesFun() {
  // Expenses input value
  const foodInput = document.getElementById('food-input');
  const foodInputText = foodInput.value;
  const foodInputNumber = parseFloat(foodInputText);



  const rentInput = document.getElementById('rent-input');
  const rentInputText = rentInput.value;
  const rentInputNumber = parseFloat(rentInputText);


  const clothesInput = document.getElementById('clothes-input');
  const clothesInputText = clothesInput.value;
  const clothesInputNumber = parseFloat(clothesInputText);


  // update total expenses
  const totalExpenses = document.getElementById('total-expenses');
  const priveousExpenses = totalExpenses.innerText;
  const updateExpenses = parseFloat(priveousExpenses);
  const updateTotalExpenses = updateExpenses + foodInputNumber + rentInputNumber + clothesInputNumber;
  const Expenses = totalExpenses.innerText = updateTotalExpenses;
  return Expenses;

}
function BalanceFun() {
  const totalBalance = document.getElementById('total-balance');
  const priveousBalance = totalBalance.innerText;
  const updateBalance = parseFloat(priveousBalance);

  totalBalance.innerText = updateBalance + incomeAmount() - ExpensesFun();

  return totalBalance;


}

















document.getElementById('calculate-btn').addEventListener('click', function () {

  // Expenses input value
  const foodInput = document.getElementById('food-input');
  const foodInputText = foodInput.value;
  const foodInputNumber = parseFloat(foodInputText);



  const rentInput = document.getElementById('rent-input');
  const rentInputText = rentInput.value;
  const rentInputNumber = parseFloat(rentInputText);


  const clothesInput = document.getElementById('clothes-input');
  const clothesInputText = clothesInput.value;
  const clothesInputNumber = parseFloat(clothesInputText);


  // update total expenses
  const totalExpenses = document.getElementById('total-expenses');
  const priveousExpenses = totalExpenses.innerText;
  const updateExpenses = parseFloat(priveousExpenses);
  const updateTotalExpenses = updateExpenses + foodInputNumber + rentInputNumber + clothesInputNumber;
  const Expenses = totalExpenses.innerText = updateTotalExpenses;

  const totalBalance = document.getElementById('total-balance');
  const priveousBalance = totalBalance.innerText;
  const updateBalance = parseFloat(priveousBalance);

  totalBalance.innerText = updateBalance + incomeAmount() - Expenses;




  // rentInput.value = '';
  // foodInput.value = '';
  // clothesInput.value = '';





})
document.getElementById('save-btn').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const saveInputText = saveInput.value;
  const saveInputNumber = parseFloat(saveInputText);

  const savingAmount = document.getElementById('saving-amount');
  const savingAmountText = savingAmount.innerText;
  const savingAmountNumber = parseFloat(savingAmountText);

  const remainingBalance = document.getElementById('remaining-balance');
  const remainingBalanceText = remainingBalance.innerText;
  const remainingBalanceNumber = parseFloat(remainingBalanceText);

  // update parcent amount

  const percentSavingAmount = incomeAmount() / 100;
  const totalSavingAmount = percentSavingAmount * saveInputNumber;

  savingAmount.innerText = totalSavingAmount;

  const updateRemainingBalance = BalanceFun() - savingAmount.innerText;

  remainingBalance.innerText = updateRemainingBalance;








})