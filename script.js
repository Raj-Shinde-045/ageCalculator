document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("max", today);
});

function calculateAge() {
    // Get the birthdate from the input field
    const birthdateInput = document.getElementById("date");
    const birthdate = new Date(birthdateInput.value);

    // Calculate the age
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Calculate months and days
    let months = monthDiff;
    let days = dayDiff;

    if (dayDiff < 0) {
        months--;
        days = new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff;
    }
    if (months < 0) {
        months += 12;
    }

    // Display the age including months and days
    const ageParagraph = document.getElementById("age");
    ageParagraph.textContent = `You are ${age} years, ${months} months, and ${days} days old.`;
}
