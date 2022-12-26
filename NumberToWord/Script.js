var th = ["", "thousand", "million", "billion", "trillion"];
var dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tn = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function toWords() {
  var s = document.getElementById("input").value;
  console.log(s);
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  var x = s.indexOf(".");
  console.log(x);
  if (x == -1) x = s.length;
  if (x > 15) document.getElementById("Output").innerHTML = "too big";
  var n = s.split("");
  var str = "";
  var sk = 0;
  console.log(x);
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + " ";
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "hundred ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += th[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }

  if (x != s.length) {
    var y = s.length;
    str += "point ";
    for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
  }
  console.log(str);
  return str.replace(/\s+/g, " ");
}
