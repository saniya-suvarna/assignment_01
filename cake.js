// Search cakes logic
function searchCakes() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let cakes = document.querySelectorAll('.cake-item');

    cakes.forEach(cake => {
        let cakeName = cake.querySelector('h3').innerText.toLowerCase();

        if (cakeName.includes(searchTerm)) {
            cake.style.display = 'block';
        } else {
            cake.style.display = 'none';
        }
    });
}
