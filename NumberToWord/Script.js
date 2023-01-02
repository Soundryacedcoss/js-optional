let oneToTy = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
let tenth = [
  "",
  "",
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
  var input = document.getElementById("input").value;
  if (input.toString().length > 7) {
    alert("Too big");
    document.getElementById("Output").innerHTML = " ";
  } else {
    let num = ("0000000" + input)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if (!num) return;
    let outputText =
      num[1] != 0
        ? (oneToTy[Number(num[1])] ||
            `${tenth[num[1][0]]} ${oneToTy[num[1][1]]}`) + " million "
        : "";

    outputText +=
      num[2] != 0
        ? (oneToTy[Number(num[2])] ||
            `${tenth[num[2][0]]} ${oneToTy[num[2][1]]}`) + "hundred "
        : "";
    outputText +=
      num[3] != 0
        ? (oneToTy[Number(num[3])] ||
            `${tenth[num[3][0]]} ${oneToTy[num[3][1]]}`) + " thousand "
        : "";
    outputText +=
      num[4] != 0
        ? (oneToTy[Number(num[4])] ||
            `${tenth[num[4][0]]} ${oneToTy[num[4][1]]}`) + "hundred "
        : "";
    outputText +=
      num[5] != 0
        ? oneToTy[Number(num[5])] ||
          `${tenth[num[5][0]]} ${oneToTy[num[5][1]]} `
        : "";
    document.getElementById("Output").innerHTML = outputText;
  }
}
