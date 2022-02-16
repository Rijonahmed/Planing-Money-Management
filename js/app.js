document.getElementById('calculate-btn').addEventListener('click', function () {

  // Income input value 
  const incomeInput = document.getElementById('income-input');
  const incomeInputText = incomeInput.value;
  const incomeInputNumber = parseFloat(incomeInputText);



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

  totalBalance.innerText = updateBalance + incomeInputNumber - Expenses;




  rentInput.value = '';
  foodInput.value = '';
  clothesInput.value = '';





})