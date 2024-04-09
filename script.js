function qSelect(elm) {
    return document.querySelector(elm);
}


function ClickandLocation() {
    qSelect(".cv-link").addEventListener("click", function () {
        window.open("./All Assest/Vishal Resume.pdf");
    })

    qSelect(".contact").addEventListener("click", function () {
        location.href = "#Contact-Sec";
    })

    qSelect(".git").addEventListener("click", function () {
        location.href = "https://github.com/surajbhojak1";
    })

    qSelect(".circle").addEventListener("click", function () {
        location.href = "https://www.linkedin.com/in/suraj-bhojak-9158b8302/";
    })

    qSelect(".linkin").addEventListener("click", function () {
        location.href = "https://www.linkedin.com/in/suraj-bhojak-9158b8302/";
    })

}
ClickandLocation();