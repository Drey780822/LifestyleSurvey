Lifestyle Preferences Survey
A web application developed for the Tshimologong Software Development Internship 2025–2026 practical test. It collects lifestyle preference survey data, stores it in an in-browser SQLite database using WebAssembly, and presents analyzed results with interactive features.
🔍 Overview
The app enables users to submit a lifestyle survey, validates input client-side, stores responses in the browser, and displays statistical analysis of collected data. All processing is handled in the browser using SQLite and WebAssembly, requiring no backend server.
✅ Features
Survey Input:

Collects personal details (full name, email, date of birth, contact number).
Captures favorite foods (Pizza, Pasta, Pap and Wors, Other) via checkboxes.
Rates lifestyle preferences (movies, radio, eating out, TV) on a 1–5 scale (Strongly Agree to Strongly Disagree) using a table-based layout with tooltips.

Validation:

All fields are mandatory.
Email must be in a valid format (e.g., example@domain.com).
Age (calculated from date of birth) must be between 5 and 120 years.
At least one favorite food must be selected.
All lifestyle rating questions must be answered.

Results Analysis:

Displays:
Total number of surveys submitted.
Average age of participants.
Oldest and youngest participant ages.
Percentage of participants who like each food option.
Average ratings for each lifestyle category.


Shows "No Surveys Available" when the database is empty


Persistence:

Uses localStorage to save survey data across browser sessions.

Deployment:

Compatible with GitHub Pages for static hosting.
Runs entirely client-side using sql.js and WebAssembly (sql-wasm.wasm).

🚀 Setup Instructions

Clone the Repository:git clone https://github.com/drey780822/LifestyleSurvey.git


Download SQLite WebAssembly File:
Download sql-wasm.wasm from sql.js releases
Place it in the js/ folder.


Run Locally:
Open index.html in a modern web browser
Fill out and submit the survey.
Navigate to results.html to view aggregated results.


📁 File Structure
File /              Folder	Description
index.html	        Main survey input form with submission modal
results.html	    Displays survey results, export, and clear options
css/styles.css	    Custom styling (teal, cream, coral theme)
js/main.js	        Handles UI logic, validation, modals, and export features
js/db.js	        Manages SQLite database operations
js/sql-wasm.js	    SQLite JavaScript wrapper
js/sql-wasm.wasm	WebAssembly binary for in-browser SQLite


🙌 Acknowledgments

Created for the Tshimologong Software Development Internship 2025–2026.
Built with HTML, CSS, JavaScript, SQLite, and WebAssembly.

