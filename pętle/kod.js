document.getElementById('runLoop').addEventListener('click', function() {
    const loopType = document.getElementById('loopType').value;
    const outputElement = document.getElementById('loopOutput');
    let output = '';

    switch (loopType) {
        case 'for':
            output = 'Pętla for:\n';
            for (let i = 1; i <= 5; i++) {
                output += `Krok ${i}\n`;
            }
            break;

        case 'while':
            output = 'Pętla while:\n';
            let j = 1;
            while (j <= 5) {
                output += `Krok ${j}\n`;
                j++;
            }
            break;

        case 'doWhile':
            output = 'Pętla do-while:\n';
            let k = 1;
            do {
                output += `Krok ${k}\n`;
                k++;
            } while (k <= 5);
            break;

        default:
            output = 'Wybierz rodzaj pętli.';
    }

    outputElement.textContent = output;
});
