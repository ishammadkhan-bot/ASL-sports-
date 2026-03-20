// JavaScript code for form handling and tab switching

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    // Process form data here
    console.log('Form Submitted:', Object.fromEntries(formData));
}

// Function to switch tabs
function switchTab(event, tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // Hide all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected tab and content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Event listeners for form
const form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

// Event listeners for tab switches
const tabLinks = document.querySelectorAll('.tab-link');
if (tabLinks) {
    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => switchTab(event, link.getAttribute('data-tab')));
    });
}