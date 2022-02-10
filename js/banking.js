function getInputValue(inputId){
    // set the amount 
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountvalue = parseFloat(inputAmountText);

    // clear the input feild
    inputField.value = '';

    return amountvalue;  
}

function updateField(totalField, amount){
      // update total
    const Total = document.getElementById(totalField);
    const previousText= Total.innerText;
    const previousAmount = parseFloat(previousText);

    const newTotal = previousAmount+amount;
    Total.innerText=newTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText); */
    const previousBalanceAmount = getCurrentBalance();

    if(isAdd == true){
        const newBalancetotal = previousBalanceAmount + amount;
        balanceTotal.innerText = newBalancetotal;
    }
    else{
        const newBalancetotal = previousBalanceAmount - amount;
    balanceTotal.innerText = newBalancetotal;
    }
}





document.getElementById('deposit-button').addEventListener('click', function(){
    
    /* 
    const inputField = document.getElementById('deposit-input');
    const inputAmountText = inputField.value;
    const amountvalue = parseFloat(inputAmountText); 
    */
    
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositText= depositTotal.innerText;
    const previousDepostiAmount = parseFloat(previousdepositText);

    const newDepositTotal = previousDepostiAmount+amountvalue;
    depositTotal.innerText=newDepositTotal; 
    */
    
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalancetotal = previousBalanceAmount + amountvalue;
    balanceTotal.innerText = newBalancetotal; 
    */

    const amountvalue= getInputValue('deposit-input');
    if(amountvalue>0){
        updateField('deposit-total', amountvalue);
        updateBalance(amountvalue, true);
    }
    

    
    
})

// hanle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    console.log('withdraw'); 
    */

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmonut = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = withdrawAmount + previousWithdrawTotalAmonut;
    withdrawTotal.innerText= newWithdrawTotal; 
    */
    
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceAmount - withdrawAmount;
    balanceTotal.innerText=newBalanceTotal; 
    */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        updateField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if(withdrawAmount>currentBalance){
        alert('You can not withdraw more than you have in your account ');
    }
})