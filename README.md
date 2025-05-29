# Lifestyle Preferences Survey

A web app developed for the **Tshimologong Software Development Internship 2025–2026** practical test. It collects user lifestyle preferences, stores them in-browser using **SQLite via WebAssembly**, and presents results with interactive analysis — all without a backend.

---

## 🔍 Overview

Users complete a lifestyle survey. Inputs are validated and stored locally in a browser-based SQLite database. Results are analyzed and visualized instantly — no internet or server required.

---

## ✅ Features

### Survey Form:
- Collects: full name, email, date of birth, contact number.
- Food preferences (Pizza, Pasta, Pap & Wors, Other) via checkboxes.
- Lifestyle ratings (movies, radio, eating out, TV) on a 1–5 scale using tooltips.
- Placeholders help guide user input.

### Validation:
- All fields are required.
- Email must be in a valid format.
- Age must be between 5 and 120 (calculated from DOB).
- At least one food option must be selected.
- All lifestyle questions must be answered.

### Results Page:
- Total number of submissions
- Average age of participants
- Oldest and youngest ages
- Percentage of people who like each food
- Average rating per lifestyle activity
- Displays "No Surveys Available" if database is empty

### Additional Features:
- Confirmation modal after submission
- "Clear All Surveys" button to reset data
- Export results as `.json` file
- Tooltips for ratings
- Data saved with `localStorage` (persistent across sessions)

---

## 🚀 How to Run

### 1. Clone the Repo:
```bash
git clone https://github.com/drey780822/LifestyleSurvey.git
2. Download SQLite WebAssembly:
Download sql-wasm.wasm from the sql.js releases

Place it in the js/ folder

3. Open in Browser:
Open index.html in Chrome, Firefox, or another modern browser

Submit a survey

Open results.html to view analysis

4. Optional – Run with Local Server:
bash
Copy
Edit
cd LifestyleSurvey
python -m http.server 8000
Then visit: http://localhost:8000

🌐 GitHub Pages Deployment
Push to your GitHub repository

Go to Settings → Pages

Set Branch to main, Folder to / (root)

Wait 1–5 minutes for deployment

Your site will be live at:
👉 https://drey780822.github.io/LifestyleSurvey/

📁 Project Structure
File/Folder	Description
index.html	Survey form with confirmation modal
results.html	Displays survey analysis and export/clear
css/styles.css	Custom styles (teal, cream, coral theme)
js/main.js	UI logic, validation, export & clear logic
js/db.js	SQLite operations
js/sql-wasm.js	SQLite wrapper
js/sql-wasm.wasm	WebAssembly binary for in-browser SQLite

🧪 Testing Tips
Submit invalid data (e.g., wrong email, age < 5) to check validation

Clear surveys and verify empty state on results page

Submit new survey to refresh results

Export .json file and check contents

Hover over rating table to test tooltips

🙌 Acknowledgments
Created by Thabang Dikotope
For the Tshimologong Software Development Internship 2025–2026
Built with HTML, CSS, JavaScript, SQLite, and WebAssembly

🔗 Links
GitHub Repository: https://github.com/drey780822/LifestyleSurvey

Live App: https://drey780822.github.io/LifestyleSurvey/

yaml
Copy
Edit
