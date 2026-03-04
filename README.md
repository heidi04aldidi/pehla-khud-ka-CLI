# Custom CLI

A functional Command Line Interface (CLI) tool built using **Node.js + TypeScript**.

---

# Installation Guide

## Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment Variables

Create a `.env` file in the root directory:

```
WEATHER_API_KEY=your_openweathermap_api_key_here
```

You can generate your API key from:
https://openweathermap.org/api

---

## Build the Project

```bash
npm run build
```

---

## Run Locally (Development Mode)

```bash
npm run dev -- greet John
```

---

## Link Globally (Optional but Recommended)

To use the CLI globally:

```bash
npm link
```

Now you can run commands like:

```bash
devtool greet John
```

---

# Available Commands

---

## Greet

Greets a user.

```bash
devtool greet <name>
devtool greet John --uppercase
```

Optional Flag:
- `--uppercase` → Converts greeting to uppercase

---

## ➕ Add

Adds two numbers.

```bash
devtool add <num1> <num2>
```

Example:
```bash
devtool add 10 5
```

---

## ➖ Subtract

Subtracts second number from first.

```bash
devtool subtract <num1> <num2>
```

---

## ✖ Multiply

Multiplies two numbers.

```bash
devtool multiply <num1> <num2>
```

---

## ➗ Divide

Divides first number by second.

```bash
devtool divide <num1> <num2>
```

Includes validation for division by zero.

---

## Random Number Generator

Generates a random number within a range.

```bash
devtool random
devtool random --min 10 --max 50
```

Options:
- `--min` → Minimum value (default: 1)
- `--max` → Maximum value (default: 100)

---

## Current Time

Displays current date and time.

```bash
devtool time
```

---

## GitHub User Info (API Integration)

Fetches public GitHub user information.

```bash
devtool github <username>
```

Example:
```bash
devtool github torvalds
```

Displays:
- Name
- Public repositories
- Followers

Uses: GitHub Public API

---

## Weather Information (API Integration)

Fetches current weather data for a city.

```bash
devtool weather <city>
```

Examples:
```bash
devtool weather London
devtool weather Delhi,IN
```

Displays:
- City name
- Temperature (°C)
- Weather condition

Uses: OpenWeatherMap API

---

## Random Quote (API Integration)

Fetches a random motivational quote.

```bash
devtool quote
```

Uses: Quotable API

---

# APIs Used

1. GitHub Public API  
2. OpenWeatherMap API  
3. Quotable API  

---

# Project Architecture

```
src/
│
├── commands/        → CLI command classes (OOP implementation)
├── services/        → API service classes
├── index.ts         → Main CLI entry point
│
dist/                → Compiled JavaScript output
```

---

# Technologies Used

- Node.js
- TypeScript
- Commander.js
- Axios
- Chalk
- Dotenv

---
