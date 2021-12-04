var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var notesArray = [2000, 500, 100, 20, 10,5,1];
checkButton.addEventListener("click", function validateAmount(){
    //console.log(isNaN(billAmount.value));
    errorMessage.style.display = "none";
    var bill = Number(billAmount.value);
    var cash = Number(cashGiven.value);
    console.log("Bill"+bill,cash);
    if(bill>0){
       if(cash>0){
           if(cash>= bill){
               
             var returnAmount = cash - bill;
             console.log(returnAmount);
             calculateNoOfNotes(returnAmount);
           }
           else{
            showErrorMessage("Cash given must be equal to or greater than bill amount");
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