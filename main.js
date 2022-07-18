let body = document.body;
let lis = document.querySelectorAll("li");
lis.forEach((e) => {
    e.onclick = () => {
        lis.forEach((e) => {
            window.localStorage.clear();
            e.classList.remove("active");
        });
        e.classList.add("active");
        let color = e.getAttribute("color");
        window.localStorage.setItem("BG", color);
        body.style.backgroundColor = window.localStorage.getItem("BG");
    };
    if (window.localStorage.length !== null) {
        let getBG = window.localStorage.getItem("BG");
        body.style.backgroundColor = getBG;
    }
    if (e.getAttribute("color") === window.localStorage.getItem("BG")) {
        e.classList.add("active");
    }
});
