Lifestyle Preferences Survey
A web app developed for the Tshimologong Software Development Internship 2025–2026 practical test. It collects user lifestyle preferences, stores them in-browser using SQLite via WebAssembly, and presents results with interactive analysis — all without a backend.

🔍 Overview
Users complete a lifestyle survey. Inputs are validated and stored locally in a browser-based SQLite database. Results are analyzed and visualized instantly — no internet or server required.

✅ Features
Survey Form:

Collects: name, email, date of birth, contact number.

Food preferences via checkboxes (e.g., Pizza, Pap & Wors).

Lifestyle ratings (movies, radio, eating out, TV) on a 1–5 scale with tooltips.

Input guidance via placeholders.

Validation Rules:

All fields required.

Valid email format.

Age must be between 5–120.

At least one food selected.

All lifestyle questions answered.

Results Page:

Total submissions

Average, oldest & youngest ages

Food preference percentages

Average ratings per lifestyle factor

Message shown if no surveys are available

Extras:

Confirmation modal on submit

"Clear All Surveys" to reset data

Export results as .json

Data persisted using localStorage

🚀 How to Run
1. Clone:

bash
Copy
Edit
git clone https://github.com/drey780822/LifestyleSurvey.git
2. Download SQLite WebAssembly:

Download sql-wasm.wasm from sql.js releases

Place in /js folder

3. Launch:

Open index.html in a modern browser (Chrome/Firefox)

Submit a survey → View results via results.html

4. Optional – Use Local Server (recommended for testing):

bash
Copy
Edit
cd LifestyleSurvey
python -m http.server 8000
Open http://localhost:8000

🌐 Deploy on GitHub Pages
Push your code to GitHub

In repo: Settings → Pages

Select branch: main, folder: / (root)

App will be live at:
👉 https://drey780822.github.io/LifestyleSurvey/

📁 Key Files
File	Description
index.html	Survey form & modal
results.html	Results viewer & export/reset options
css/styles.css	Custom theme styling
js/main.js	Form logic, validation, export/reset
js/db.js	SQLite operations
js/sql-wasm.js	SQLite JS wrapper
js/sql-wasm.wasm	WebAssembly binary

🧪 Tips for Testing
Try invalid emails, missing fields, age under 5

Submit, then check results on results.html

Clear surveys → Confirm "No Surveys Available" shows

Submit again → Verify data refresh

Export JSON → Check downloaded file

🙌 Credits
Created by Thabang Dikotope
For the Tshimologong Software Dev Internship 2025–2026
Built with HTML, CSS, JS, SQLite, WebAssembly

🔗 Links
Repo: https://github.com/drey780822/LifestyleSurvey

Live App: https://drey780822.github.io/LifestyleSurvey/
