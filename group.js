const login = document.getElementById("login"),
    btn = document.getElementById("Btn"),
    close = document.getElementById("close");

btn.addEventListener("click", () => {
    login.style.display = "block";
    login.style.opacity = 100;
});

close.addEventListener("click", () => {
    login.style.opacity = '0';
})