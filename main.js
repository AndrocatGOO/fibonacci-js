let limit = prompt("Escoje el limite de la secuencia fibonacci");

var fibo = [0, 1];

for (i = 2; i <= limit; i++) {
    if (fibo[i - 1] < limit && (fibo[i - 1] + fibo[i - 2]) < limit) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        document.write(fibo[i] + "<br/>");
    } else {
        break;
    };
};