// initializare
const header = document.getElementById("inceput");
const buton = document.createElement("button");
const main = document.querySelector("main");
const footer = document.getElementById("final");

// stilizare buton
buton.textContent = "Adaugă Recenzie";
buton.style.padding = "10px 20px";
buton.style.backgroundColor = "#f78f3f";
buton.style.color = "white";
buton.style.border = "none";
buton.style.borderRadius = "5px";
buton.style.cursor = "pointer";
main.appendChild(buton);

// formular recenzii
const formular = document.createElement("form");
formular.innerHTML = `
    <h2>Lasă o recenzie</h2>
    <input type="text" id="nume" placeholder="Numele tău">
    <textarea id="text" placeholder="Recenzia ta..."></textarea>
    <label>
        Scor:
        <input type="number" id="rating" min="1" max="5">
    </label>
    <button type="submit">Trimite</button>
`;

// stilizare formular
formular.style.display = "none";
formular.style.marginTop = "20px";
formular.style.padding = "10px";
formular.style.border = "1px solid #ccc";
formular.style.borderRadius = "5px";
formular.style.backgroundColor = "#f9f9f9";
main.appendChild(formular);

// mesaj eroare
const errorMessage = document.createElement("div");
errorMessage.style.display = "none";
errorMessage.style.backgroundColor = "#f78f3f";
errorMessage.style.color = "white";
errorMessage.style.padding = "10px";
errorMessage.style.marginTop = "10px";
errorMessage.style.borderRadius = "5px";
errorMessage.style.width = "80%";
errorMessage.style.margin = "0 auto";
errorMessage.style.textAlign = "center";
main.appendChild(errorMessage);

// afisare/ascundere formular
buton.addEventListener("click", function () {
    formular.style.display = formular.style.display === "none" ? "block" : "none";
});

// validare formular
function validareFormular(nume, text, rating) {
    if (!nume.trim()) {
        errorMessage.textContent = "Te rugăm să introduci un nume valid.";
        errorMessage.style.display = "block";
        return false;
    }
    if (!text.trim()) {
        errorMessage.textContent = "Te rugăm să introduci o recenzie.";
        errorMessage.style.display = "block";
        return false;
    }
    if (rating < 1 || rating > 5) {
        errorMessage.textContent = "Scorul trebuie să fie între 1 și 5.";
        errorMessage.style.display = "block";
        return false;
    }
    return true;
}

// salvare recenzii in localStorage
function saveReviewsToLocalStorage(reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

// incarcarea recenzii din localStorage
function loadReviewsFromLocalStorage() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => {
        adaugaReview(review.nume, review.text, review.rating, false);
    });
}

// adaugare recenzii
function adaugaReview(nume, text, rating, save = true) {
    const review = document.createElement("div");
    review.style.padding = "10px";
    review.style.marginTop = "10px";
    review.style.border = "1px solid #ccc";
    review.style.borderRadius = "5px";
    setInterval(function(){
        review.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    },2000)
    review.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";

    const ultimulReview = main.querySelector("main > div:last-child");
    if (ultimulReview) {
        const ultimaCuloare = getComputedStyle(ultimulReview).backgroundColor;
        const culoareNoua = getComputedStyle(review).backgroundColor;
        if (culoareNoua === ultimaCuloare) {
            review.style.backgroundColor = "green";
        }
    }

    review.innerHTML = `
        <h3>${nume}</h3>
        <p><strong>Scor:</strong> ${rating} ⭐</p>
        <p>${text}</p>
    `;

    main.appendChild(review);

    if (save) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push({ nume, text, rating });
        saveReviewsToLocalStorage(reviews);
    }
}

// trimitere formular
formular.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.style.display = "none";

    const nume = document.getElementById("nume").value;
    const text = document.getElementById("text").value;
    const rating = parseInt(document.getElementById("rating").value, 10);

    if (!validareFormular(nume, text, rating)) return;

    adaugaReview(nume, text, rating);
    formular.reset();
    formular.style.display = "none";
});

// stergere ultimul review
document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
        const reviews = document.querySelectorAll("main > div");
        if (reviews.length > 0) {
            main.removeChild(reviews[reviews.length - 1]);
            const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
            storedReviews.pop();
            saveReviewsToLocalStorage(storedReviews);
        }
    }
});

loadReviewsFromLocalStorage();


const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// desen fata
ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2);  // cerc mare
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke(); // contur

ctx.beginPath();
ctx.arc(140, 150, 20, 0, Math.PI * 2);  // ochi stang
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(260, 150, 20, 0, Math.PI * 2);  // ochi drept
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(200, 230, 70, 0, Math.PI);  // gura
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();