document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositAmount  = document.getElementById('depo-field');
    let depositValueString = depositAmount.value;
    const depositValue = parseFloat(depositValueString);
    
    const deposit = document.getElementById('deposit');
    const previousDepoString = deposit.innerText;
    const previousDeposit = parseFloat(previousDepoString);

    const totalDeposit = depositValue + previousDeposit;
    deposit.innerText = totalDeposit;
    
//Total Balance
    const balanceAmount = document.getElementById('balance');
    const balanceString = balanceAmount.innerText;
    const balance = parseFloat(balanceString);
    const totalBalance = balance + depositValue;
    balanceAmount.innerText = totalBalance;


    depositAmount.value = '';

})