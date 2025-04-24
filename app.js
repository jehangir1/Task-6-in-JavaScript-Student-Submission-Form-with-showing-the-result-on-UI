document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.querySelector('.student-form');
    const resultDiv = document.querySelector('.submission-result');
    const resetButton = document.querySelector('.reset-form');
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const studentData = {};
        let detailsHTML = '';
        
        for (const [key, value] of formData.entries()) {
            studentData[key] = value;
            detailsHTML += `<strong>${key}:</strong> ${value}<br>`;
        }
        
        // Display submission result
        document.querySelector('.submission-details').innerHTML = detailsHTML;
        resultDiv.classList.remove('hidden');
        form.classList.add('hidden');
        
        // In a real application, you would send the data to a server here
        console.log("Form submitted with data:", studentData);
    });
    
    // Reset form
    resetButton.addEventListener('click', function() {
        form.reset();
        form.classList.remove('hidden');
        resultDiv.classList.add('hidden');
    });
});