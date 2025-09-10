// Pobieramy suwak oraz element, w którym wyświetlamy aktualny kontrast
const contrastSlider = document.getElementById('contrast-slider');
const contrastValue = document.getElementById('contrast-value');

// Funkcja do aktualizacji kontrastu
function updateContrast() {
    // Pobieramy wartość suwaka
    const contrast = contrastSlider.value;

    // Ustawiamy kontrast na stronie
    document.body.style.filter = `contrast(${contrast}%)`;

    // Wyświetlamy aktualną wartość kontrastu
    contrastValue.textContent = `${contrast}%`;
}

// Dodajemy nasłuchiwanie na zmianę wartości suwaka
contrastSlider.addEventListener('input', updateContrast);

// Ustawiamy początkowy kontrast na wartość suwaka
updateContrast();
