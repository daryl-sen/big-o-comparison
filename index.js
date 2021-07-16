const PORT = 8080;
const express = require("express");
const app = express();
const { performance } = require("perf_hooks");

// string containing 1000000 characters
const input = (() => {
  let bigString = "";
  for (let i = 0; i < 1000000; i++) {
    bigString += Math.random() > 0.5 ? "a" : "b";
  }
  return bigString;
})();

// The following routes determine if the input is a palindrome
app.get("/good", (req, res) => {
  for (let i = 0; i < input.length / 2; i++) {
    // -> O(n/2)
    if (input[i] !== input[input.length - i - 1]) return res.json(true);
  }
  return res.json(true);
});

app.get("/bad", (req, res) => {
  if (input === input.split("").reverse().join("")) {
    return res.json(true);
  }
  return res.json(false);
  /*
    input 
      .split("")  -> O(n)
      .reverse()  -> O(n)
      .join(""))  -> O(n)
    
    total         -> O(3n)
  */
});

app.get("/1", (req, res) => {
  const start = performance.now();
  input[3];
  const end = performance.now();
  res.json(end - start + " ms");
});

app.get("/n", (req, res) => {
  const start = performance.now();
  for (const item of input) {
    item === 1;
  }
  const end = performance.now();
  res.json(end - start + " ms");
});

app.get("/n2", (req, res) => {
  const start = performance.now();
  for (const item of input) {
    for (const item2 of input) {
      item == item2;
    }
  }
  const end = performance.now();
  res.json(end - start + " ms");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
