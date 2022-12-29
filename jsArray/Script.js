var data = [
  ["Q1", 340, 604, 38, 335, 365, 35, 336, 484, 80],
  ["Q2", 680, 583, 10, 684, 490, 48, 595, 594, 39],
  ["Q3", 535, 490, 50, 389, 385, 15, 366, 385, 20],
];
console.log(data[0][0]);
var table =
  '<table border=solid black 2px><tr><th colspan="4">Location="Kolkata"</th><th colspan="3">Location="Delhi"</th><th colspan="3">Location="Mumbai"</th></tr><tr><th colspan="4">Item</th><th colspan="3">Item</th><th colspan="4">Item</th></tr><tr><th>Time</th><th>Milk</th><th>Egg</th><th>Bread</th><th>Milk</th><th>Egg</th><th>Bread</th><th>Milk</th><th>Egg</th><th>Bread</th></tr>';
data.forEach((element) => {
  table += `<tr>`;
  element.forEach((element1) => {
    table += `<td>${element1}</td>`;
  });
  table += `</tr>`;
});
table += "</table>";
document.getElementById("table").innerHTML = table;
let temp1;
let temp = 0;
let res;
for (let i = 0; i < data.length; i++) {
  // maximum sale of egg
  temp1 = data[i][2] + data[i][5] + data[i][8];
  if (temp1 > temp) {
    temp = temp1;
    res = data[i][0];
    document.getElementById("Output").innerHTML = "Quater" + res ;
    console.log(res);
  }
}
let loc1=0;
let loc2=0;
let loc3=0;
let locationvar;
let temp2=99999999999;
// let location;
for (let i = 0; i < data.length; i++) {

  loc1 += data[i][1];
  loc2 +=data[i][4];
  loc3 +=data[i][7];
  if (loc1<loc2|| loc1<loc3) {
    temp2=loc1
  }
  else if(loc3<loc1|| loc3<loc2){
    temp2=loc3
  }
  else if(loc2<loc1|| loc2<loc3){
    temp2=loc2
  }
}
document.getElementById("Milk").innerHTML=temp2 + "Mumbai"

// Deleting location
let temp3 = 0;
let minBread = 999999;

Kolkata = 0;
Delhi = 0;
Mumbai = 0;

for (let i = 0; i < data.length; i++) {
  Kolkata += data[i][3];
  Delhi += data[i][6];
  Mumbai += data[i][8];
  if (Kolkata < Delhi || Kolkata < Mumbai) {
    minBread = Kolkata;
  } else if (Mumbai < Kolkata) {
    minBread = Mumbai;
  } else {
    minBread = Delhi;
  }
}

let newArr = data.map(function (val) {
  return val.splice(4, 3);
});

let newTable = `<table border=solid black 2px>
<tr>
<th colspan="4">Location = "Kolkata"</th>
<th colspan="3">Location = "Mumbai"</th>
</tr>
<tr>
<th colspan="4">"Item"</th>
<th colspan="3">"Item"</th>
</tr>
<tr>
<th>Time</th>
<th>Milk</th>
<th>Egg</th>
<th>Bread</th> 
<th>Milk</th><th>Egg</th><th>Bread</th>
</tr>`;

for (let i = 0; i < data.length; i++) {
  newTable += `<tr>`;
  for (let j = 0; j < data[i].length; j++) {
    newTable += `<td>${data[i][j]}</td>`;
  }
  newTable += `</tr>`;
}
newTable += `</table>`;

document.getElementById("Table").innerHTML = newTable;
