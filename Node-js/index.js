const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Sujal Shrestha");

readline.question("Enter yes or No: ", (answer) => {
  if (answer.toLowerCase() === "yes") {
    console.log("I love you too");
  } else if (answer.toLowerCase() === "no") {
    console.log("THARKI KT");
  } else {
    console.log("Please enter yes or no.");
  }

  readline.close();
});
