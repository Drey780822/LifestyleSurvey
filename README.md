# Lifestyle Preferences Survey

A web application developed by **Thabang Drey Dikotope** for the **Tshimologong Software Development Internship 2025–2026** practical test. It collects lifestyle preference survey data, stores it in an in-browser SQLite database using WebAssembly, and presents analyzed results with interactive features.

**Project Name**: Lifestyle Preferences Survey  
**Author**: Thabang Drey Dikotope  
**Email**: thabangdikotope624@gmail.com  
**GitHub Repository**: [https://github.com/drey780822/LifestyleSurvey](https://github.com/drey780822/LifestyleSurvey)  
**GitHub Pages URL**: [https://drey780822.github.io/LifestyleSurvey/](https://drey780822.github.io/LifestyleSurvey/)  
**Submission Deadline**: Wednesday, June 4, 2025

## 🔍 Overview
The Lifestyle Preferences Survey is a client-side web application that enables users to submit lifestyle preference surveys, validates inputs, stores responses in a browser-based SQLite database, and displays statistical analysis of collected data. Built with HTML, CSS, JavaScript, and SQLite via WebAssembly (sql.js), it runs entirely in the browser without a backend server, making it ideal for static hosting on GitHub Pages.

The application meets all Tshimologong Internship requirements, offering a user-friendly interface, robust data storage, accurate analysis, and interactive features like data export and database reset. A detailed project documentation PDF is available in the repository (`LifestyleSurveyDocumentation.pdf`).

## ✅ Features

### Survey Input (`index.html`)
- Collects personal details: full name, email, date of birth, contact number.
- Captures favorite foods (Pizza, Pasta, Pap and Wors, Other) via checkboxes.
- Rates lifestyle preferences (movies, radio, eating out, TV) on a 1–5 scale (1 = Strongly Agree, 5 = Strongly Disagree) using a table-based layout with tooltips.
- Displays a success modal upon valid submission.

### Validation
- All personal details fields are mandatory.
- Email must follow a valid format (e.g., `example@domain.com`).
- Age (calculated from date of birth) must be between 5 and 120 years.
- At least one favorite food must be selected.
- All lifestyle rating questions must be answered.
- Error messages guide users to correct invalid inputs.

### Results Analysis (`results.html`)
- Displays:
  - Total number of surveys submitted.
  - Average age of participants.
  - Oldest and youngest participant ages.
  - Percentage of participants who like each food option.
  - Average ratings for each lifestyle category.
- Shows "No Surveys Available" when the database is empty.
- Includes buttons to:
  - **Clear All Surveys**: Resets the database.
  - **Export Results**: Downloads survey data as a JSON file.

### Data Storage
- Uses an in-browser SQLite database via WebAssembly (sql.js).
- Stores data in a `Surveys` table with columns for personal details, food preferences, and ratings.
- Persists data in `localStorage` under the key `surveyDb` for cross-session access.

### Deployment
- Hosted on GitHub Pages for static, serverless access.
- Compatible with modern browsers (Chrome, Firefox, Edge) supporting WebAssembly.

## 🛠 Technical Architecture

### Tech Stack
- **Frontend**:
  - **HTML**: Structure for `index.html` (survey form) and `results.html` (results display).
  - **CSS**: Responsive styling in `css/styles.css` (teal, cream, coral theme).
  - **JavaScript**: Logic in `js/main.js` (form handling, validation, modals, export) and `js/db.js` (database operations).
- **Database**: SQLite via WebAssembly (`js/sql-wasm.js`, `js/sql-wasm.wasm`), persisted in `localStorage`.
- **Version Control**: Git and GitHub.
- **Development Environment**: Visual Studio Code.
- **Deployment**: GitHub Pages.

### File Structure

LifestyleSurvey/ ├── index.html # Survey input form with submission modal ├── results.html # Survey results, export, and clear options ├── css/ │ └── styles.css # Custom styling ├── js/ │ ├── main.js # UI logic, validation, modals, export │ ├── db.js # SQLite database operations │ ├── sql-wasm.js # SQLite JavaScript wrapper │ └── sql-wasm.wasm # WebAssembly binary for SQLite ├── README.md # Project overview and setup └── LifestyleSurveyDocumentation.pdf # Detailed project documentation


### Database Schema
- **Table**: `Surveys`
- **Columns**:
  - `id`: INTEGER, PRIMARY KEY, AUTOINCREMENT
  - `full_name`: VARCHAR(100), NOT NULL
  - `email`: VARCHAR(100), NOT NULL
  - `dob`: VARCHAR(10), NOT NULL (YYYY-MM-DD)
  - `contact_number`: VARCHAR(20), NOT NULL
  - `food_pizza`, `food_pasta`, `food_pap_wors`, `food_other`: INTEGER, NOT NULL (1 = selected, 0 = not)
  - `rating_movies`, `rating_radio`, `rating_eat_out`, `rating_tv`: INTEGER, NOT NULL (1–5)
- **Storage**: In-memory SQLite, serialized to `localStorage` as `surveyDb`.

### Why No Backend?
The application uses SQLite compiled to WebAssembly via sql.js, enabling database operations entirely in the browser. This approach:
- Aligns with GitHub Pages’ static hosting limitations.
- Simplifies setup for evaluators, requiring only a browser.
- Meets internship requirements for a lightweight, accessible demo.
- Handles form submission, storage, and analysis client-side.

## 🚀 Setup Instructions for Evaluators

### Running on GitHub Pages
1. Visit [https://drey780822.github.io/LifestyleSurvey/](https://drey780822.github.io/LifestyleSurvey/) in a modern browser (Chrome, Firefox, Edge).
2. Fill out and submit the survey in `index.html`.
3. Navigate to `results.html` to view aggregated results.
4. Use the “Clear All Surveys” button to reset the database and “Export Results” to download JSON data.

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/drey780822/LifestyleSurvey.git
   cd LifestyleSurvey





Ensure js/sql-wasm.wasm is in the js/ folder. If missing, download from sql.js releases (e.g., version 1.8.0).



Start a local server to avoid CORS issues:

python -m http.server 8000



Open http://localhost:8000 in a browser and test the application.

Notes





Browser Compatibility: Requires WebAssembly support (modern browsers like Chrome, Firefox, Edge).



Data Storage: Survey data is stored in localStorage (surveyDb), isolated per browser.



Troubleshooting: Check the browser Console (F12 → Console) for errors (e.g., sql-wasm.wasm not found). Use a local server for local testing, not direct file access.

🎥 Demo Video

A 2–3 minute demo video will be submitted, showcasing:





Survey submission with valid and invalid inputs (validation).



Results display with computed metrics (total surveys, ages, food percentages, ratings).



“Clear All Surveys” button resetting to “No Surveys Available.”



JSON export functionality.



Table-based ratings with tooltips.



Deployment on GitHub Pages (https://drey780822.github.io/LifestyleSurvey/).

📚 Documentation

For a detailed project overview, including requirements, technical architecture, development plan, and challenges, see LifestyleSurveyDocumentation.pdf in the repository.

🙌 Acknowledgments





Created for the Tshimologong Software Development Internship 2025–2026.



Built with HTML, CSS, JavaScript, SQLite, and WebAssembly.



Thanks to sql.js for enabling in-browser SQLite functionality.



Contact: Thabang Drey Dikotope (thabangdikotope624@gmail.com)
Submission Date: June 3, 2025
