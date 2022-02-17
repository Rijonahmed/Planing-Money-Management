//income input function
function incomeAmount() {
  const incomeInput = document.getElementById('income-input');
  const incomeInputText = incomeInput.value;
  const incomeInputNumber = parseFloat(incomeInputText);

  //error handiling 
  if (typeof incomeInputNumber != 'number') {

    return alert('please give a number'), incomeInput.value = 'gives a number';
  }
  else if (incomeInputNumber <= 0) {
    return alert('please give a positive number'), incomeInput.value = 'positive number';

  }
  return incomeInputNumber;

};



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
  // amount big error 
  if (updateTotalExpenses > incomeAmount()) {
    totalExpenses.innerText = ' error';

  }
  if (totalExpenses.innerText == 'error') {
    const errorMassage = document.getElementById('display-none-second');
    errorMassage.style.display = 'block';

  }
  if (totalExpenses.innerText == 'NaN') {
    const errorMassage = document.getElementById('display-none');
    errorMassage.style.display = 'block';


  }


  const totalBalance = document.getElementById('total-balance');
  const priveousBalance = totalBalance.innerText;
  const updateBalance = parseFloat(priveousBalance);

  const balance = totalBalance.innerText = incomeAmount() - Expenses;

  // error handiling with minus number
  if (balance <= 0) {
    totalBalance.innerText = ' error';

  }


  // input emty string
  rentInput.value = '';
  foodInput.value = '';
  clothesInput.value = '';






  document.getElementById('save-btn').addEventListener('click', function () {

    // save input btn
    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const saveInputNumber = parseFloat(saveInputText);

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = parseFloat(savingAmount.innerText);


    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = parseFloat(remainingBalance.innerText);


    // update parcent amount

    const percentSavingAmount = incomeAmount() / 100;
    const totalSavingAmount = percentSavingAmount * saveInputNumber;

    savingAmount.innerText = totalSavingAmount;

    //Error your Balance is low error 
    if (totalSavingAmount > balance) {
      alert('Error your Balance is low'),
        savingAmount.innerText = 'error';


    }

    const remaining = remainingBalance.innerText = balance - totalSavingAmount;
    // error handiling with minus number
    if (remaining < 0) {
      remainingBalance.innerText = 'error';

    }

  })
})