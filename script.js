// Button click
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button was clicked! 🎉');
});

// Hover effect
document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.textContent = 'Thanks for hovering! 😊';
});

// Keypress detection
document.getElementById('keypressInput').addEventListener('keypress', function(e) {
    console.log(`You pressed: ${e.key}`);
});

// Change text button
document.getElementById('changeTextButton').addEventListener('click', function() {
    this.textContent = 'Text Changed!';
    this.style.backgroundColor = 'purple';
});

// Image gallery functionality
const images = [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200/ff7f7f",
    "https://via.placeholder.com/400x200/87ceeb"
];
let currentIndex = 0;

document.getElementById('nextImage').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

document.getElementById('prevImage').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

// Tabs
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');
        document.getElementById(`tab-${this.dataset.tab}`).style.display = 'block';
    });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('formFeedback');

    if (username === '' || email === '' || password === '') {
        feedback.textContent = 'Please fill all fields!';
        feedback.style.color = 'red';
    } else if (!email.includes('@')) {
        feedback.textContent = 'Invalid email address!';
        feedback.style.color = 'red';
    } else if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Success! 🎉 Form submitted.';
        feedback.style.color = 'green';
    }
});
