let myBalance = parseInt(document.getElementById("myBalance"));

function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > 20000) {
    alert("Amount entered should be less than 50000.");
  } else {
    var findUserBankAccount = enterName + "AccountBalance";
    var myBalance =
      parseInt(document.getElementById("myBalance").innerText) - enterAmount;
    document.getElementById("myBalance").innerText = myBalance;
    // document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert(
      `Transaction Successful !  ₹${enterAmount} is sent to ${enterName}@gmail.com.`
    );

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(
      `₹${enterAmount} is sent to recipient with Email-id ${enterName}@gmail.com on ${Date()}.`
    );
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
