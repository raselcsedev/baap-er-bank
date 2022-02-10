document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(depositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositText= depositTotal.innerText;
    const previousDepostiAmount = parseFloat(previousdepositText);

    const newDepositTotal = previousDepostiAmount+newdepositAmount;
    depositTotal.innerText=newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalancetotal = previousBalanceAmount + newdepositAmount;
    balanceTotal.innerText = newBalancetotal;

    // clear the deposit input feild
    depositInput.value = '';
})

// hanle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    // update withdraw amount 
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    console.log('withdraw');

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmonut = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = withdrawAmount + previousWithdrawTotalAmonut;
    withdrawTotal.innerText= newWithdrawTotal;

    // redous amount from account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceAmount - withdrawAmount;
    balanceTotal.innerText=newBalanceTotal;

    withdrawInput.value ='';
})