
/* Welcome Message */
function showWelcome() {
    alert("Welcome to Reynalyn's Personal Portfolio!");
}

/* Read More / Show and Hide Information */
function toggleAbout() {
    const info = document.getElementById("moreAbout");
    const button = document.getElementById("readMoreBtn");

    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        button.textContent = "Read Less";
    } else {
        info.classList.add("hidden");
        button.textContent = "Read More";
    }
}

/* Dark Mode / Light Mode */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

/* Back to Top */
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* Current Year */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* Current Date and Time */
function updateDateTime() {
    const now = new Date();

    document.getElementById("dateTime").textContent =
        "Current Date and Time: " + now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

/* Contact Form Demonstration */
document.getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        document.getElementById("formMessage").textContent =
            "Thank you, " + name +
            "! Your message was entered successfully.";

        this.reset();
    });
