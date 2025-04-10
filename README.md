# String Calculator - Machine Test

This repository contains a simple JavaScript function `add(string)` that evaluates a string of numbers and returns their sum. It supports various delimiters, newlines, and error handling for negative numbers.

## ✅ Features

- Returns `0` for empty input
- Handles:
  - Single number (e.g. `"1"` → `1`)
  - Comma-separated numbers (e.g. `"1,2"` → `3`)
  - Newline-separated values (e.g. `"1\n2,3"` → `6`)
- Supports custom single-character delimiters using syntax like `//;\n1;2`
- Throws an error for negative numbers and lists them all

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/string-calculator.git
   cd string-calculator

## 🚀 Run the js file with node command
   node string_calculator.js
