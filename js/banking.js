function getInputValue(inputId){
    const inputField = document.getElementById(inputId);          //input dilo
    const inputAmountText =inputField.value;                           //input value text kore nilo
    const amountValue = parseFloat(inputAmountText);

    //claer input field 
    inputField.value= "";
    return amountValue;
}
//deposite withdraw subtotal
function updateTotalField(totalFieldId, amount){
    // debugger
    const totalElement = document.getElementById(totalFieldId);        //suru thekei joto taka silo
    const totalText = totalElement.innerText;//0+1                //seta vhitore je text(00)silo seta text holo
    const previousTotal = parseFloat(totalText);//0        //text ta ager joma kora taka hoye gelo

    totalElement.innerText = previousTotal + amount;
}
//update total balance
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');       //id ta dhorlam
    const balanceTotalText = balanceTotal.innerText;                    //ager taka ta kei text korlam
    const previousBalanceTotal = parseFloat(balanceTotalText);         //text to float 
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
//deposite section
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue("deposit-input");
    if(depositAmount > 0){
        updateTotalField( 'deposit-total',depositAmount)
        updateBalance(depositAmount, true);
    }
    
});
//withdraw section

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue("withdraw-input");
    if(withdrawAmount > 0){
        updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount,false);
    }
});


//------------------------------------------------------------------------------------------//



/* //deposite section

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById("deposit-input");          //input dilo
    const depositAmountText =depositInput.value;                           //input value text kore nilo
    const depositAmount = parseFloat(depositAmountText);//1               //text theke float a korlam
    

   //get and update current deposit total
  
    const depositTotal = document.getElementById('deposit-total');        //suru thekei joto taka silo
    const depositTotalText = depositTotal.innerText;//0+1                //seta vhitore je text(00)silo seta text holo
    const previousDepositTotal = parseFloat(depositTotalText);//0        //text ta ager joma kora taka hoye gelo

    depositTotal.innerText = previousDepositTotal + depositAmount;//0+1  //ager joma r akhon joma deya taka jog holo

   

    //update deposite totale balance
    const balanceTotal = document.getElementById('balance-total');       //id ta dhorlam
    const balanceTotalText = balanceTotal.innerText;                    //ager taka ta kei text korlam
    const previousBalanceTotal = parseFloat(balanceTotalText);         //text to float 

    balanceTotal.innerText = previousBalanceTotal + depositAmount;      //joma taka r ager takar jog main balance a
    //claer input field 
    depositInput.value= "";
});

//withdraw section

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); 


    //get current withdraw amount total
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balnce total after withdraw balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

//  claer input field 
     withdrawInput.value = '';
}); */