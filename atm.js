$(document).ready(function() {

//withdraw
  $("#savingsWithdrawButton").on("click", withdraw);
  $("#checkingWithdrawButton").on("click", withdraw);

//deposits
  $("#checkingDepositButton").on("click", deposit);
  $("#savingsDepositButton").on("click", deposit);

//functions
 function deposit() {
     var currentBalance = $(this).siblings(".balance").html().replace(/?/g,'currentBalance');
     var transactionAmount = $(this).siblings(".transactionAmount").val().replace(/?/g,'currentBalance');
 	currentBalance = parseInt(currentBalance)+parseInt(transactionAmount);
 	$(this).siblings(".balance").html('$' + currentBalance);

 function withdraw() {
     var currentBalance = $(this).siblings(".balance").html().replace(/?/g,'currentBalance');
     var transactionAmount = $(this).siblings(".transactionAmount").val().replace(/?/g,'currentBalance');
     var otherBalance = $(this).parent().siblings(".account").children(".balance").html().replace(/?/g,'currentBalance');
     currentBalance = parseInt(currentBalance);
     transactionAmount = parseInt(transactionAmount);
     otherBalance = parseInt(otherBalance);

     if (currentBalance >= transactionAmount) {
 		currentBalance = currentBalance-transactionAmount;
 		$(this).siblings(".balance").html('$' + currentBalance);
 		$(this).siblings(".withdrawLastButton").val('Withdraw $'+transactionAmount);
 	}
 	else if (transactionAmount < (currentBalance+otherBalance)) {
 		currentBalance = currentBalance-transactionAmount+otherBalance;
 		$(this).siblings(".balance").html('$0');
 		$(this).parent().siblings(".account").children(".balance").html('$'+currentBalance);
 	});
