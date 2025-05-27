// Listens for any click events occurring in the submit button
document.getElementById('submit').addEventListener('click', function(event) {
    const userInput = document.querySelectorAll('.form-input');
    const fileUpload = document.getElementById('fileupload');
    let noInput = false; // To be used for final checking whether there are any fields left unfilled

    userInput.forEach(function (input) { // Loops through all elements that are assigned with the .form-input class 
        if (input.value.trim() === '') {
        noInput = true; // Means none or one or two .form-input elements are not inputted
        input.style.border = '2px solid red'; // Glows with red when there is an error
        } else { // User had inputted all of the required fields
        input.style.border = ''; 
        }
    });

    if (fileUpload.files.length === 0) { // Means no file was uploaded
        noInput = true;
        fileUpload.style.border = '2px solid red';
    } else { // User had uploaded the required files
        fileUpload.style.border = '';
    }

    if (noInput) {
        event.preventDefault(); // Hinders the user to submit the form
        alert('Fill up the required fields and upload your resume!');
    }
});

