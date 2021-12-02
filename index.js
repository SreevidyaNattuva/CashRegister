const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-givem");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
console.log(checkButton);

checkButton.addEventListener("click", function validateAmount(){
    errorMessage.style.display = "none";
    if(billAmount.value>0){
       if(cashGiven.value>0){
           if(cashGiven.value>= billAmount.value){
             const amountToBeReturned = cashGiven - billAmount;
           }
           else{
            showErrorMessage("Cash given must be equal to bill amount");
           }
       }
    }
    else{
        showErrorMessage("bill amount is invalid");
        }
});
function showErrorMessage(errorMessage){
    errorMessage.style.display = "block";
    errorMessage.innerText = errorMessage;

}