
const form = document.getElementById("input-form")

loadFormDataFromLocalStorage();

form.addEventListener("submit", function (textarea){
    textarea.preventDefault();
    const image = document.querySelector(".images-put").value;
    const imagesummit = document.querySelector(".image-summit").value;
    const title = document.querySelector(".title").value;
    const massage = document.querySelector(".message").value;
    const date =document.querySelector(".selected_date").value;
    const summit =document.querySelector(".summit").value;

     storeFormDatainLocalStorages(image,imagesummit,title,massage,date,summit);
console.log('image:', image);
console.log('imagesummit:', imagesummit);
console.log('title:', title);
console.log('massage:', massage);
console.log('dateTime:', date);
console.log('button Sumit:', summit);

});

function storeFormDatainLocalStorages(image,imagesummit,title,massage,date,summit){
localStorage.setItem('image:', image);
localStorage.setItem('imagesummit:', imagesummit);
localStorage.setItem('title:', title);
localStorage.setItem('massage:', massage);
localStorage.setItem('dateTime:', date);
localStorage.setItem('button Sumit:', summit);
}

function loadFormDataFromLocalStorage() {
const image = localStorage.getItem('image');
const imagesummit = localStorage.getItem('imagesummit');
const title = localStorage.getItem('title');
const massage = localStorage.getItem('massage');
const date= localStorage.getItem('date');
const summit = localStorage.getItem('summit');



if (image) {
    document.getElementById('image').value = image;
}
if (imagesummit) {
    document.getElementById('imagesummit').value = imagesummit;
}
if (title) {
    document.getElementById('title').value = title;
}
if (massage) {
    document.getElementById('massage').value = massage;
}
if (date) {
    document.getElementById('date').value = date;
}
if (summit) {
    document.getElementById('summit').value = summit;
}
}