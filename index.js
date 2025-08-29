const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

function alternatingCaps(str) {
  let result = "";
  let toggle = true;
  for (let ch of str.split("").reverse()) {
    if (/[a-zA-Z]/.test(ch)) {
      result += toggle ? ch.toUpperCase() : ch.toLowerCase();
      toggle = !toggle;
    }
  }
  return result;
}

// 👇 CHANGE THESE DETAILS TO YOURS
const FULL_NAME = "mohana_priyanka"; // lowercase full name with underscore
const DOB = "17091999"; // ddmmyyyy
const EMAIL = "your_email@vitstudent.ac.in";
const ROLL_NUMBER = "21MIS1234"; // replace with your roll

// ✅ New GET route for browser friendliness
app.get("/", (req, res) => {
  res.send("✅ Welcome to the BFHL API! Use POST /bfhl with JSON body to test.");
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let concatAlpha = "";

    for (let item of data) {
      if (/^\d+$/.test(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) evenNumbers.push(item);
        else oddNumbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatAlpha += item;
      } else {
        specialChars.push(item);
      }
    }

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: alternatingCaps(concatAlpha),
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
});

module.exports = app;
