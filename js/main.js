document.addEventListener('DOMContentLoaded', async () => {
    await initDatabase();

    // Survey Form Submission
    const surveyForm = document.getElementById('surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const errorMessage = document.getElementById('errorMessage');

            // Collect form data
            const formData = new FormData(surveyForm);
            const data = {
                full_name: formData.get('full_name')?.trim(),
                email: formData.get('email')?.trim(),
                dob: formData.get('dob'),
                contact_number: formData.get('contact_number')?.trim(),
                food_pizza: formData.get('food_pizza') ? 1 : 0,
                food_pasta: formData.get('food_pasta') ? 1 : 0,
                food_pap_wors: formData.get('food_pap_wors') ? 1 : 0,
                food_other: formData.get('food_other') ? 1 : 0,
                rating_movies: parseInt(formData.get('rating_movies')),
                rating_radio: parseInt(formData.get('rating_radio')),
                rating_eat_out: parseInt(formData.get('rating_eat_out')),
                rating_tv: parseInt(formData.get('rating_tv'))
            };

            // Validation
            errorMessage.style.display = 'none';
            if (!data.full_name || !data.email || !data.dob || !data.contact_number) {
                errorMessage.textContent = 'All personal details fields are required.';
                errorMessage.style.display = 'block';
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                errorMessage.textContent = 'Please enter a valid email address.';
                errorMessage.style.display = 'block';
                return;
            }

            // Validate age
            const dob = new Date(data.dob);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
            if (age < 5 || age > 120) {
                errorMessage.textContent = 'Age must be between 5 and 120 years.';
                errorMessage.style.display = 'block';
                return;
            }

            // Validate food selection
            if (!data.food_pizza && !data.food_pasta && !data.food_pap_wors && !data.food_other) {
                errorMessage.textContent = 'At least one favorite food must be selected.';
                errorMessage.style.display = 'block';
                return;
            }

            // Validate ratings
            if (!data.rating_movies || !data.rating_radio || !data.rating_eat_out || !data.rating_tv) {
                errorMessage.textContent = 'All rating questions must be answered.';
                errorMessage.style.display = 'block';
                return;
            }

            // Save to database
            insertSurvey(data);
            surveyForm.reset();
            showModal();
        });
    }

    // Display Survey Results
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
        const results = getSurveyResults();
        if (results.totalSurveys === 0) {
            document.getElementById('noSurveys').style.display = 'block';
            return;
        }

        document.getElementById('noSurveys').style.display = 'none';
        document.getElementById('totalSurveys').textContent = results.totalSurveys;
        document.getElementById('averageAge').textContent = results.averageAge;
        document.getElementById('oldestAge').textContent = results.oldestAge;
        document.getElementById('youngestAge').textContent = results.youngestAge;
        document.getElementById('pizzaPercentage').textContent = results.pizzaPercentage;
        document.getElementById('pastaPercentage').textContent = results.pastaPercentage;
        document.getElementById('papWorsPercentage').textContent = results.papWorsPercentage;
        document.getElementById('moviesRating').textContent = results.moviesRating;
        document.getElementById('radioRating').textContent = results.radioRating;
        document.getElementById('eatOutRating').textContent = results.eatOutRating;
        document.getElementById('tvRating').textContent = results.tvRating;
    }
});

// Modal Functions
function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Export Results
function exportResults() {
    const surveys = getAllSurveys();
    const json = JSON.stringify(surveys, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'survey_results.json';
    a.click();
    URL.revokeObjectURL(url);
}
