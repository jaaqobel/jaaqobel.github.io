// Pobieramy suwak i element, który wyświetla aktualną wartość kontrastu
const contrastSlider = document.getElementById('contrast-slider');
const contrastValue = document.getElementById('contrast-value');

// Funkcja do aktualizacji kontrastu
function updateContrast() {
    // Pobieramy wartość suwaka
    const contrast = contrastSlider.value;

    // Zmieniamy kontrast na całym body
    document.body.style.filter = `contrast(${contrast}%)`;

    // Wyświetlamy wartość kontrastu na stronie
    contrastValue.textContent = `${contrast}%`;

    // Wypisujemy wartość kontrastu do konsoli (debugowanie)
    console.log(`Aktualny kontrast: ${contrast}%`);
}

// Dodajemy nasłuchiwanie na zmianę wartości suwaka
contrastSlider.addEventListener('input', updateContrast);

// Ustawiamy początkowy kontrast na wartość suwaka (100%)
updateContrast();
