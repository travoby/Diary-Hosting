
const form = document.getElementById('myForm');
const messageDiv = document.getElementById('message');
const previewImage = document.getElementById('previewImage');

form.addEventListener('change', (event) => { // Changed to 'change' event for immediate preview
  const imageInput = event.target;
  if (imageInput.type !== 'file' || !imageInput.files[0]) return;  // Check for image file

  reader.readAsDataURL(imageInput.files[0]);
});

// Optionally pre-fill the preview image on page load from local storage
const storedImage = localStorage.getItem('storedImage');
if (storedImage) {
  previewImage.src = storedImage;
}
