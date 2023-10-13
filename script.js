document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById("upload-form");
    const outputImage = document.getElementById("output-image");

    let selectedImageFile = null;
    let selectedAudioFile = null;

    document.getElementById("image").addEventListener("change", function(event) {
        selectedImageFile = event.target.files[0];
    });

    document.getElementById("audio").addEventListener("change", function(event) {
        selectedAudioFile = event.target.files[0];
    });

    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (selectedImageFile && selectedAudioFile) {
            // Handle the form submission, send files to the server, and update the output image.
            // Add the necessary code here.
            
            // For example, to update the output image's source:
            outputImage.src = 'output-image-url'; // Replace 'output-image-url' with the actual URL of the processed image.
        } else {
            alert("Please select both an image and an audio file.");
        }
    });
});
