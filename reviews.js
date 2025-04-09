document.addEventListener("DOMContentLoaded", loadReviews);

let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    let stars = document.querySelectorAll(".rating span");
    stars.forEach((star, index) => {
        star.classList.toggle("active", index < rating);
    });
    document.getElementById("review-rating").value = rating;
}

function addReview(event) {
    event.preventDefault();
    let name = document.getElementById("reviewer-name").value;
    let text = document.getElementById("review-text").value;
    let rating = document.getElementById("review-rating").value;
    
    if (rating == 0) {
        alert("Please select a rating!");
        return;
    }
    
    let review = { name, text, rating };
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    
    document.getElementById("reviewer-name").value = "";
    document.getElementById("review-text").value = "";
    setRating(0);
    
    loadReviews();
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let reviewList = document.getElementById("reviews-list");
    reviewList.innerHTML = "";
    
    reviews.forEach(review => {
        let reviewItem = document.createElement("p");
        reviewItem.innerHTML = `<strong>${review.name}</strong> (${"⭐".repeat(review.rating)})<br>${review.text}`;
        reviewList.appendChild(reviewItem);
    });
}