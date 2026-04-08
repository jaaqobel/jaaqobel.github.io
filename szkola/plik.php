<?php
$filename = "dane.txt";

// Zapis do pliku
if (isset($_POST['zapisz'])) {
    $tekst = $_POST['tekst'];
    file_put_contents($filename, $tekst . PHP_EOL, FILE_APPEND);
}

// Odczyt całego pliku
if (isset($_POST['readfile'])) {
    echo "<h3>Zawartość (readfile):</h3>";
    if (file_exists($filename)) {
        readfile($filename);
    } else {
        echo "Plik nie istnieje.";
    }
}

// Odczyt 20 znaków
if (isset($_POST['fread'])) {
    echo "<h3>Pierwsze 20 znaków (fread):</h3>";
    if (file_exists($filename)) {
        $plik = fopen($filename, "r");
        echo fread($plik, 20);
        fclose($plik);
    } else {
        echo "Plik nie istnieje.";
    }
}

// Czytanie znak po znaku
if (isset($_POST['fgetc'])) {
    echo "<h3>Znak po znaku (fgetc):</h3>";
    if (file_exists($filename)) {
        $plik = fopen($filename, "r");
        while (($znak = fgetc($plik)) !== false) {
            echo $znak;
        }
        fclose($plik);
    } else {
        echo "Plik nie istnieje.";
    }
}

// Usuwanie pliku
if (isset($_POST['usun'])) {
    if (file_exists($filename)) {
        unlink($filename);
        echo "<p>Plik usunięty.</p>";
    } else {
        echo "<p>Plik nie istnieje.</p>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Operacje na plikach PHP</title>
</head>
<body>

<h2>Zapis do pliku</h2>

<form method="post">
    <textarea name="tekst" rows="5" cols="40" placeholder="Wpisz coś..."></textarea><br><br>
    <button type="submit" name="zapisz">Zapisz do pliku</button>
</form>

<h2>Akcje</h2>

<form method="post" style="display:inline;">
    <button name="readfile">Odczytaj (readfile)</button>
</form>

<form method="post" style="display:inline;">
    <button name="fread">Odczytaj 20 znaków (fread)</button>
</form>

<form method="post" style="display:inline;">
    <button name="fgetc">Czytaj znak po znaku (fgetc)</button>
</form>

<form method="post" style="display:inline;">
    <button name="usun">Usuń plik (unlink)</button>
</form>

</body>
</html>
