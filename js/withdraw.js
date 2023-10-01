document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    const withdrawAmount  = document.getElementById('withdraw-field');
    let withdrawValueString = withdrawAmount.value;
    const withdrawValue = parseFloat(withdrawValueString);
    
    const withdraw = document.getElementById('withdraw');
    const previousWithdrawString = withdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const totalWithdraw = previousWithdraw + withdrawValue;
    withdraw.innerText = totalWithdraw;

    //Total Balance
    const balanceAmount = document.getElementById('balance');
    const balanceString = balanceAmount.innerText;
    const balance = parseFloat(balanceString);
    const totalBalance = balance - withdrawValue;
    balanceAmount.innerText = totalBalance;

    withdrawAmount.value = '';


})