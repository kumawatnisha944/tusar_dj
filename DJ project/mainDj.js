function sendWhatsAppMessage(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let eventDate = document.getElementById('event_date').value;
    let message = document.getElementById('message').value;
    
    let whatsappMessage = `Hello, I want to book DJ services.\n\nName: ${name}\nAddress: ${address}\nEvent Date: ${eventDate}\nDetails: ${message}`;
    
    let whatsappURL = `https://wa.me/917340463221?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
}

function addReview(event) {
    event.preventDefault();
    let name = document.getElementById('reviewer-name').value;
    let review = document.getElementById('review-text').value;
    let reviewsList = document.getElementById('reviews-list');
    
    let newReview = document.createElement('p');
    newReview.innerHTML = `"${review}" - ${name} ⭐⭐⭐⭐⭐`;
    reviewsList.appendChild(newReview);
    
    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';
}