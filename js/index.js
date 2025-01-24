document.getElementById('akan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    if (!birthdateInput || !gender) {
        alert('Please enter a valid birthdate and select your gender.');
        return;
    }

    const birthdate = new Date(birthdateInput);
    const dayOfWeek = birthdate.getDay();

    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    let akanName = '';

    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else if (gender === 'female') {
        akanName = femaleNames[dayOfWeek];
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Akan name is ${akanName}.`;
});

