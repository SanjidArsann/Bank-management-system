document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    const withdrawAmount  = document.getElementById('withdraw-field');
    let withdrawValueString = withdrawAmount.value;
    const withdrawValue = parseFloat(withdrawValueString);

    const balanceAmount = document.getElementById('balance');
    const balanceString = balanceAmount.innerText;
    const balance = parseFloat(balanceString);

    if(withdrawValue <= 0){
        window.alert('Invalid Amount');
    }

    // if(withdrawValue < balance){
    //     window.alert('Invalid Amount');
    // }
    
    if(withdrawValue > 0){
        const withdraw = document.getElementById('withdraw');
        const previousWithdrawString = withdraw.innerText;
        const previousWithdraw = parseFloat(previousWithdrawString);
    
        const totalWithdraw = previousWithdraw + withdrawValue;
        
    
        //Total Balance
        
        const totalBalance = balance - withdrawValue;
   if(totalBalance < 0){
    window.alert('Invalid Amount');

    }   
    else{
        balanceAmount.innerText = totalBalance;
        withdraw.innerText = totalWithdraw;
    } 
        
    
        withdrawAmount.value = '';

    }
})