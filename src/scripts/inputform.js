
const form = document.getElementById("input-form")

loadFormDataFromLocalStorage();

form.addEventListener("submit", function (textarea){
    textarea.preventDefault();
    const image = document.querySelector(".images-put").element;
    const imagesummit = document.querySelector(".image-summit").element;
    const title = document.querySelector(".title").element;
    const massage = document.querySelector(".message").element;
    const date =document.querySelector(".selected_date").element;
    const summit =document.querySelector(".summit").element;

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

if (image) {
    document.getElementById('image').element = image;
}
if (imagesummit) {
    document.getElementById('imagesummit').element = imagesummit;
}
if (title) {
    document.getElementById('title').element = title;
}
}