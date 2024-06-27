


function calculateFormula(x) {
    var a = 4, b = 0, c = 3, d = 2;
    var y = (a * x) / (c * x + d);
    document.getElementById("formula-result").innerHTML = "Результат для x = " + x + " : y = " + y;
}

function stringOperations() {
    var s1 = "Я люблю Беларусь";
    var s2 = "Я учусь в Политехническом колледже";

    var lengthS2 = s2.length;

    var eleventhCharS1 = s1.charAt(10);
    var asciiCode = eleventhCharS1.charCodeAt(0);

    var modifiedS1 = s1.replace("Беларусь", "Минск");

    document.getElementById("string-length").innerHTML = "Длина строки s2: " + lengthS2;
    document.getElementById("eleventh-char").innerHTML = "11-й символ строки s1: " + eleventhCharS1 + " (ASCII-код: " + asciiCode + ")";
    document.getElementById("modified-s1").innerHTML = "Измененная строка s1: " + modifiedS1;
}
