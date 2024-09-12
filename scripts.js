document.getElementById('disease-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const symptom1 = document.getElementById('symptom1').value;
    const symptom2 = document.getElementById('symptom2').value;
    const symptom3 = document.getElementById('symptom3').value;

    // Dummy result for demonstration
    const predictedDisease = `Based on your symptoms: ${symptom1}, ${symptom2}, ${symptom3}, you might have a common cold.`;

    document.getElementById('disease-result').textContent = predictedDisease;
    document.getElementById('disease-result').style.display = 'block';
});

document.getElementById('insurance-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const bmi = document.getElementById('bmi').value;
    const age = document.getElementById('age').value;
    const smoker = document.getElementById('smoker').value;
    const region = document.getElementById('region').value;

    // Dummy result for demonstration
    const estimatedPremium = `For a ${age}-year-old ${smoker === 'yes' ? 'smoker' : 'non-smoker'} with a BMI of ${bmi} living in the ${region} region, the estimated premium is $450/month.`;

    document.getElementById('premium-result').textContent = estimatedPremium;
    document.getElementById('premium-result').style.display = 'block';
});
