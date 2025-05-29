Lifestyle Preferences Survey
A web application developed for the Tshimologong Software Development Internship 2025–2026 practical test. It collects lifestyle preference survey data, stores it in an in-browser SQLite database using WebAssembly, and presents analyzed results with interactive features.
🔍 Overview
The app enables users to submit a lifestyle survey, validates input client-side, stores responses in the browser, and displays statistical analysis of collected data. All processing is handled in the browser using SQLite and WebAssembly, requiring no backend server.
✅ Features
Survey Input:

Collects personal details (full name, email, date of birth, contact number).
Captures favorite foods (Pizza, Pasta, Pap and Wors, Other) via checkboxes.
Rates lifestyle preferences (movies, radio, eating out, TV) on a 1–5 scale (Strongly Agree to Strongly Disagree) using a table-based layout with tooltips for rating clarity.
Provides input placeholders to guide users (e.g., email format, phone number).

Validation:

All fields are mandatory.
Email must match a valid format (e.g., example@domain.com).
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


Shows "No Surveys Available" when the database is empty (e.g., after clearing or on first use).

Additional Features:

Submission confirmation modal after successful survey submission.
"Clear All Surveys" button to reset the database, displaying only "No Surveys Available" until new surveys are submitted.
Export survey results as a JSON file for download.
Table-based rating inputs with hover tooltips to clarify the 1–5 scale.

Persistence:

Uses localStorage to save survey data across browser sessions.

Deployment:

Compatible with GitHub Pages for static hosting.
Runs entirely client-side using sql.js and WebAssembly (sql-wasm.wasm).

🚀 Setup Instructions

Clone the Repository:git clone https://github.com/drey780822/LifestyleSurvey.git


Download SQLite WebAssembly File:
Download sql-wasm.wasm from sql.js releases (e.g., version 1.8.0).
Place it in the js/ folder.


Run Locally:
Open index.html in a modern web browser (e.g., Chrome, Firefox).
Fill out and submit the survey.
Navigate to results.html to view aggregated results.
For accurate testing, use a local server:cd LifestyleSurvey
python -m http.server 8000

Open http://localhost:8000.


Deploy to GitHub Pages:
Push the repository to GitHub (see below for Git commands).
Go to repository Settings → Pages.
Set Branch to main and Folder to / (root), then click Save.
Wait 1–5 minutes for deployment.
Access the app at https://drey780822.github.io/LifestyleSurvey/.
Ensure js/sql-wasm.wasm is included in the repository.



📁 File Structure



File/Folder
Description



index.html
Main survey input form with submission confirmation modal.


results.html
Displays survey results, export, and clear database options.


css/styles.css
Custom styling (teal, cream, coral theme).


js/main.js
Handles UI logic, validation, modals, export, and clear functionality.


js/db.js
Manages SQLite database operations.


js/sql-wasm.js
SQLite JavaScript wrapper.


js/sql-wasm.wasm
WebAssembly binary for in-browser SQLite.


📌 Notes

Browser Compatibility: Requires a modern browser with WebAssembly support (e.g., Chrome, Firefox, Edge).
Data Storage: Survey data is stored in localStorage and persists until cleared via the "Clear All Surveys" button.
Testing Suggestions:
Submit valid and invalid survey inputs to test validation (e.g., invalid email, age < 5).
View results in results.html to verify metrics.
Click "Clear All Surveys," confirm, and ensure only "No Surveys Available" is displayed.
Navigate to results.html to confirm the empty state persists.
Submit a new survey to repopulate results.
Export results as JSON and verify the file contents.
Test table-based ratings and tooltips for usability.


GitHub Pages: If sql-wasm.wasm fails to load (check Console for errors), host it externally (e.g., via a CDN) and update db.js’s locateFile path.

🎥 Demo Video
For the internship submission, record a 2–3 minute video demonstrating:

Submitting a survey with valid and invalid inputs to show validation.
Viewing results in results.html with all metrics displayed.
Clicking "Clear All Surveys," confirming once, and showing only "No Surveys Available."
Navigating to results.html to verify the empty state persists.
Submitting a new survey to repopulate results.
Exporting results as JSON.
Highlighting table-based ratings and tooltips.Use a tool like OBS Studio or Loom and upload to the provided submission link by June 4, 2025.

🙌 Acknowledgments

Created for the Tshimologong Software Development Internship 2025–2026.
Built with HTML, CSS, JavaScript, SQLite, and WebAssembly.

📅 Submission

Repository: https://github.com/drey780822/LifestyleSurvey
GitHub Pages: https://drey780822.github.io/LifestyleSurvey/
Video: Upload to the internship submission link by June 4, 2025.

