const navbar = document.querySelector(".navbar-layout");
fetch("../layout/navbar.html")
.then((res) => res.text())
.then((data) => {
  navbar.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));