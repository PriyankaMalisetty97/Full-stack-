# BFHL REST API – Bajaj Finserv Health | Full Stack Assignment

This project is a **REST API** built as part of the Bajaj Finserv Health | Full Stack assignment.  
It processes an array of inputs and returns structured data including numbers, alphabets, special characters, and more.

---

## 🚀 Features
- Accepts an array via **POST /bfhl**
- Returns:
  - ✅ Status (`is_success`)
  - ✅ User ID (`full_name_ddmmyyyy`)
  - ✅ Email ID
  - ✅ Roll Number
  - ✅ Odd numbers (as strings)
  - ✅ Even numbers (as strings)
  - ✅ Alphabets (converted to uppercase)
  - ✅ Special characters
  - ✅ Sum of numbers (as string)
  - ✅ Concatenated alphabets (reverse order, alternating caps)

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **Vercel** (for hosting)

---

## 📡 API Endpoint
```

POST https://your-app-name.vercel.app/bfhl
````

### Example Request
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
````

### Example Response

```json
{
  "is_success": true,
  "user_id": "mohana_priyanka_21072004",
  "email": "priyanka.22bce7444@vitapstudent.ac.in",
  "roll_number": "22BCE7444",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

---

## 📂 Project Structure

```
fullstack-bfhl/
 ├── index.js        # Express API logic
 ├── package.json    # Dependencies
 └── vercel.json     # Vercel deployment config
```

---

## 🏃 How to Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/fullstack-bfhl.git
   cd fullstack-bfhl
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Run the server

   ```bash
   node index.js
   ```
4. Test with Postman at

   ```
   http://localhost:3000/bfhl
   ```

---

## 👩‍💻 Author

* **Name**: Mohana Priyanka
* **Roll Number**: 22BCE7444
* **Email**: [priyanka.22bce7444@vitapstudent.ac.in](mailto:priyanka.22bce7444@vitapstudent.ac.in)

```
