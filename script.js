// Matrix Code Rain
function generateMatrixRain() {
    const matrixCodeContainer = document.createElement('div');
    matrixCodeContainer.className = 'matrix-code';
    document.body.appendChild(matrixCodeContainer);

    for (let i = 0; i < 50; i++) {
        let column = document.createElement('p');
        for (let j = 0; j < 100; j++) {
            column.appendChild(document.createTextNode(Math.floor(Math.random() * 2)));
        }
        column.style.left = (i * 20) + 'px';
        matrixCodeContainer.appendChild(column);
    }
}

generateMatrixRain();

// Smooth scrolling for navbar links
document.querySelectorAll('nav#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
