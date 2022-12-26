var incomeHistory = [];
var temp = 0;
var incomeType;
var incomeAmount;
function TotalIncomeHandler() {
  incomeType = document.getElementById("incometype").value;
  console.log(incomeType);
  incomeAmount = document.getElementById("incomeAmount").value;
  console.log(incomeAmount);
  if (incomeType === "" && incomeAmount === "") {
    alert("please enter income amount and income type");
    document.getElementById("incometype").focus();
  } else if (incomeType === "") {
    alert("Please Enter income type");
    document.getElementById("incometype").focus();
  } else if (!isNaN(incomeType)) {
    alert("Amount type should be a string");
    document.getElementById("incometype").focus();
  } else if (incomeAmount === "") {
    alert("Please Enter income Amount");
    document.getElementById("incomeAmount").focus();
  } else if (isNaN(incomeAmount)) {
    alert("Amount should be a number");
    document.getElementById("incomeAmount").focus();
  } else {
    var obj = {
      incomeAmount: incomeAmount,
      incomeType: incomeType,
    };
    incomeHistory.push(obj);
    temp += parseInt(incomeAmount);
    document.getElementById("TotalAmount").innerHTML = temp;
    console.log(incomeHistory);
    var table = "<table><th>Income</th><th>Amount</th>";
    incomeHistory.forEach((element) => {
      table +=
        "<tr><td>" +
        element.incomeType +
        " </td><td>" +
        element.incomeAmount +
        "</td></tr>";
    });
    table += "</table>";
    document.getElementById("output").innerHTML = table;
    document.getElementById("incomeAmount").value = " ";
    document.getElementById("incometype").value = " ";
  }
}

var expenseHistory = [];
var ExpenseType;
var ExpenseAmount;
function TotalExpenseHandler() {
  ExpenseType = document.getElementById("selectExpense").value;
  console.log(incomeType);
  console.log(ExpenseType);
  ExpenseAmount = document.getElementById("ExpenseAmount").value;
  console.log(ExpenseAmount);
  if (
    ExpenseType === "" &&
    ExpenseAmount === "" &&
    incomeType === "" &&
    incomeAmount === ""
  ) {
    alert("please enter income amount and income type First");
    document.getElementById("incometype").focus();
  } else if (ExpenseType === "" && ExpenseAmount === "") {
    alert("please Select Expense Type and enter amount");
    document.getElementById("selectExpense").focus();
  } else if (ExpenseType === "") {
    alert("please Select Expense Type ");
    document.getElementById("selectExpense").focus();
  } else if (ExpenseAmount === "") {
    alert("please enter Expense amount ");
    document.getElementById("ExpenseAmount").focus();
  } else if (isNaN(ExpenseAmount)) {
    alert("Amount should be a number");
    document.getElementById("ExpenseAmount").focus();
  } else {
    document.getElementById("selectExpense").value = "";
    document.getElementById("ExpenseAmount").value = " ";
    var obj = {
      id: Math.random(),
      ExpenseType: ExpenseType,
      ExpenseAmount: ExpenseAmount,
    };
    expenseHistory.push(obj);
    temp = temp - parseInt(ExpenseAmount);
    document.getElementById("TotalAmount").innerHTML = temp;
    display();
  }
}

function display() {
  var table = "<table> <th>Income</th> <th>Amount</th> <th>Action</th>";
  expenseHistory.forEach((element) => {
    table +=
      "<tr><td>" +
      element.ExpenseType +
      " </td><td>" +
      element.ExpenseAmount +
      " </td><td> " +
      "<button onclick=\"ModifyHandler('" +
      element.id +
      "')\">Modify</button>" +
      " </td><td> " +
      "<button onclick=\"DeleteHandler('" +
      element.id +
      "')\">Delete</button>" +
      "</td></tr>";
  });
  table += "</table>";

  document.getElementById("ExenseHistory").innerHTML = table;
}

function ModifyHandler(val) {
  for (let i = 0; i < expenseHistory.length; i++) {
    if (val == expenseHistory[i].id) {
      document.getElementById("selectExpense").value = ExpenseType;
      document.getElementById("ExpenseAmount").value = ExpenseAmount;
      expenseHistory.splice(i, 1);
    }
  }
  temp = temp + parseInt(ExpenseAmount);
  document.getElementById("TotalAmount").innerHTML = temp;
  display();
}
function DeleteHandler(val) {
  console.log("hii");
  for (let i = 0; i < expenseHistory.length; i++) {
    if (val == expenseHistory[i].id) {
      console.log("delte");
      expenseHistory.splice(i, 1);
    }
  }
  temp = temp + parseInt(ExpenseAmount);
  document.getElementById("TotalAmount").innerHTML = temp;
  display();
}
