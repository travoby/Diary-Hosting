const footer = document.querySelector(".footer-layout");
fetch("../layout/footer.html")
.then((res) => res.text())
.then((data) => {
  footer.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error)); 