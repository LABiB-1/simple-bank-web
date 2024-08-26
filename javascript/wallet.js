// deposite field calculation
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = document.getElementById('deposite-amount');
    const depositeA = depositeAmount.value;
    const depositeBefore = document.getElementById('deposite-current');
    const depositeCurrent = depositeBefore.innerText;
    depositeBefore.innerText = parseFloat(depositeA) + parseFloat(depositeCurrent);
 
// balance field calculation by deposite
    const currentBalanceS = document.getElementById('balance-amount');
    const currentBalance = currentBalanceS.innerText;
    currentBalanceS.innerText = parseFloat(currentBalance) + parseFloat(depositeA);

    depositeAmount.value ='';
    
})


// withdraw field calculation
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const wihtdrawAmount = document.getElementById('withdraw-amount');
    const withdrawA = wihtdrawAmount.value;
    const wihtdrawBefore = document.getElementById('withdraw-current');
    const withdrawCurrent = wihtdrawBefore.innerText;
    wihtdrawBefore.innerText = parseFloat(withdrawA) + parseFloat(withdrawCurrent);
    

    // balance field calculation by deposite
    const currentBalanceS = document.getElementById('balance-amount');
    const currentBalance = currentBalanceS.innerText;
    currentBalanceS.innerText = parseFloat(currentBalance) - parseFloat(withdrawA);

    wihtdrawAmount.value ='';

})