let db = null;

async function initDatabase() {
    const config = { locateFile: () => 'js/sql-wasm.wasm' };
    const SQL = await initSqlJs(config);
    
    // Load database from localStorage or create new
    const savedDb = localStorage.getItem('surveyDb');
    if (savedDb) {
        const buf = new Uint8Array(JSON.parse(savedDb));
        db = new SQL.Database(buf);
    } else {
        db = new SQL.Database();
        db.run(`
            CREATE TABLE Surveys (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                full_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                dob VARCHAR(10) NOT NULL,
                contact_number VARCHAR(20) NOT NULL,
                food_pizza INTEGER NOT NULL,
                food_pasta INTEGER NOT NULL,
                food_pap_wors INTEGER NOT NULL,
                food_other INTEGER NOT NULL,
                rating_movies INTEGER NOT NULL,
                rating_radio INTEGER NOT NULL,
                rating_eat_out INTEGER NOT NULL,
                rating_tv INTEGER NOT NULL
            );
        `);
    }
}

function saveDatabase() {
    if (db) {
        const data = db.export();
        localStorage.setItem('surveyDb', JSON.stringify(Array.from(data)));
    }
}

function clearDatabase() {
    if (db) {
        db.run('DROP TABLE Surveys');
        db.run(`
            CREATE TABLE Surveys (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                full_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                dob VARCHAR(10) NOT NULL,
                contact_number VARCHAR(20) NOT NULL,
                food_pizza INTEGER NOT NULL,
                food_pasta INTEGER NOT NULL,
                food_pap_wors INTEGER NOT NULL,
                food_other INTEGER NOT NULL,
                rating_movies INTEGER NOT NULL,
                rating_radio INTEGER NOT NULL,
                rating_eat_out INTEGER NOT NULL,
                rating_tv INTEGER NOT NULL
            );
        `);
        localStorage.removeItem('surveyDb');
    }
}

function insertSurvey(data) {
    const stmt = db.prepare(`
        INSERT INTO Surveys (
            full_name, email, dob, contact_number,
            food_pizza, food_pasta, food_pap_wors, food_other,
            rating_movies, rating_radio, rating_eat_out, rating_tv
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run([
        data.full_name, data.email, data.dob, data.contact_number,
        data.food_pizza, data.food_pasta, data.food_pap_wors, data.food_other,
        data.rating_movies, data.rating_radio, data.rating_eat_out, data.rating_tv
    ]);
    stmt.free();
    saveDatabase();
}

function getSurveyResults() {
    const results = {
        totalSurveys: 0,
        averageAge: 0,
        oldestAge: 0,
        youngestAge: 0,
        pizzaPercentage: 0,
        pastaPercentage: 0,
        papWorsPercentage: 0,
        moviesRating: 0,
        radioRating: 0,
        eatOutRating: 0,
        tvRating: 0
    };

    // Total surveys
    const total = db.exec('SELECT COUNT(*) AS count FROM Surveys');
    results.totalSurveys = total[0]?.values[0][0] || 0;

    if (results.totalSurveys === 0) return results;

    // Calculate ages
    const dobs = db.exec('SELECT dob FROM Surveys');
    const ages = dobs[0].values.map(row => {
        const dob = new Date(row[0]);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
        return age;
    });

    // Average, oldest, youngest age
    results.averageAge = (ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(1);
    results.oldestAge = Math.max(...ages);
    results.youngestAge = Math.min(...ages);

    // Food percentages
    const pizza = db.exec('SELECT (SUM(food_pizza) * 100.0 / COUNT(*)) AS perc FROM Surveys');
    results.pizzaPercentage = pizza[0].values[0][0].toFixed(1);
    const pasta = db.exec('SELECT (SUM(food_pasta) * 100.0 / COUNT(*)) AS perc FROM Surveys');
    results.pastaPercentage = pasta[0].values[0][0].toFixed(1);
    const papWors = db.exec('SELECT (SUM(food_pap_wors) * 100.0 / COUNT(*)) AS perc FROM Surveys');
    results.papWorsPercentage = papWors[0].values[0][0].toFixed(1);

    // Average ratings
    const movies = db.exec('SELECT AVG(rating_movies) AS avg FROM Surveys');
    results.moviesRating = movies[0].values[0][0].toFixed(1);
    const radio = db.exec('SELECT AVG(rating_radio) AS avg FROM Surveys');
    results.radioRating = radio[0].values[0][0].toFixed(1);
    const eatOut = db.exec('SELECT AVG(rating_eat_out) AS avg FROM Surveys');
    results.eatOutRating = eatOut[0].values[0][0].toFixed(1);
    const tv = db.exec('SELECT AVG(rating_tv) AS avg FROM Surveys');
    results.tvRating = tv[0].values[0][0].toFixed(1);

    return results;
}

function getAllSurveys() {
    const surveys = db.exec('SELECT * FROM Surveys');
    const columns = surveys[0].columns;
    const result = surveys[0].values.map(row => {
        let obj = {};
        columns.forEach((col, index) => {
            obj[col] = row[index];
        });
        return obj;
    });
    return result;
}