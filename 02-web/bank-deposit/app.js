var totalBalance = 0;
var deposit = 0;
var depositBtn = document.querySelector(".deposit-btn");
var balanceElement = document.querySelector(".balance");
var handleClick = function() {
  deposit = Number(document.querySelector("#deposit").value);
  var currentBalance = Number(balanceElement.textContent);
  var newBalance = deposit + currentBalance;
  balanceElement.textContent = newBalance;
};

depositBtn.addEventListener("click", handleClick);
