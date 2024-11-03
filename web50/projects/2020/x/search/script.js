function feelingLucky() {
    const query = document.querySelector('input[name="q"]').value;
    if (query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
        window.location.href = url;
    } else {
        alert("Please enter a search term.");
    }
}
