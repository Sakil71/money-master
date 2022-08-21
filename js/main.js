function getInputFieldById(inputId){
    const expensesField = document.getElementById(inputId);
    const expensesElementString =expensesField.value;
    const expensesElement = parseFloat(expensesElementString);
    if(isNaN(expensesElement)){
        alert('Select a number');
        return;
    }
    return expensesElement;
}

function getTextElementById(textId){
    const totalExpenseAdd = document.getElementById(textId);
    const totalAddString = totalExpenseAdd.innerText;
    const totalAdd = parseFloat(totalAddString);
    return totalAdd;
}
function setElementById(textId, inputId){
    const setTextElement = document.getElementById(textId);
    setTextElement.innerText = inputId;
}

// Calculate Button 
document.getElementById('calculate-button').addEventListener('click', function(){
    const foodField = getInputFieldById('food-field');
    const rentField = getInputFieldById('rent-field');
    const clothField = getInputFieldById('cloth-field');
    const income = getInputFieldById('income');

    const totalExpenses = foodField + rentField + clothField;
    if(totalExpenses > income){
        alert('Insufficient balance')
        return;
    }
    
    setElementById('total-expense', totalExpenses);

    const totalBalance = income - totalExpenses;
    setElementById('total-balance', totalBalance);
})

// Save Button 
document.getElementById('save-button').addEventListener('click', function(){
    const percentageField = getInputFieldById('percentage-field');
    const income = getInputFieldById('income');

    if(isNaN(income)){
        alert('Please input your income');
        return;
    }

    const savingAmount = income * (percentageField / 100);
    setElementById('save-percentage', savingAmount);

    const totalBalance = getTextElementById('total-balance');
    const  remainingBalance = totalBalance - savingAmount;
    setElementById('remaining-balance', remainingBalance);
})

document.getElementById('back-color').addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'pink';
})