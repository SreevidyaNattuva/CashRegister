const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var notesArray = [2000, 500, 100, 20, 10,5,1];
checkButton.addEventListener("click", function validateAmount(){
    console.log(isNaN(billAmount.value));
    errorMessage.style.display = "none";
    if((billAmount.value>0) && !(isNaN(billAmount.value))){
       if(cashGiven.value>0){
           if(cashGiven.value>= billAmount.value){
               
             const returnAmount = cashGiven.value - billAmount.value;
             console.log(returnAmount);
             calculateNoOfNotes(returnAmount);
           }
           else{
            showErrorMessage("Cash given must be equal to bill amount");
           }
       }
    }
    else{
        showErrorMessage("Please enter a valid bill amount and bill amount must be a number");
        }
        function calculateNoOfNotes(returnAmount){
            for(var i=0; i<notesArray.length; i++){
                //console.log(returnAmount);
                 var noOfNotestobeReturned = Math.trunc(returnAmount/notesArray[i]);
                 returnAmount = returnAmount%notesArray[i];
                 //console.log(returnAmount,noOfNotestobeReturned);
                 noOfNotes[i].innerText = noOfNotestobeReturned;
            }
        }
});
function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;

}