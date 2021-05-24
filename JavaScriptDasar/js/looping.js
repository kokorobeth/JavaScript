// Contoh untuk melakukan looping dengan for
var jawabanContoh = ""
for (var i = 0; i < 5; i++) {
    jawabanContoh += "ini adalah angka ke: " + [i] + "<br>"
    
}

// Driver Code
document.getElementById("example").innerHTML = jawabanContoh


// Soal No. 1 Looping menggunakan While
/* 
    Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'." 

    OUTPUT :

    LOOPING PERTAMA
    2 - I love coding
    4 - I love coding
    6 - I love coding
    8 - I love coding
    10 - I love coding
    12 - I love coding
    14 - I love coding
    16 - I love coding
    18 - I love coding
    20 - I love coding
    LOOPING KEDUA
    20 - I will become web developer
    18 - I will become web developer                                                                              
    16 - I will become web developer
    14 - I will become web developer
    12 - I will become web developer
    10 - I will become web developer
    8 - I will become web developer
    6 - I will become web developer
    4 - I will become web developer
    2 - I will become web developer
*/
var jawaban1 = ""
// Code kamu di sini, lakukan looping dengan while
var looping1 = ""

var i = 2
while(i < 21) {
    looping1 += i + "- I love coding <br>"
    i += 2
}

var looping2 = ""
var j = 20 
while(j >= 2) {
    looping2 += j + "- I will become web developer <br>"
    j -= 2;
}

var jawaban1 = "<h2>Looping Pertama</h2>" + looping1 + "<h2>Looping Kedua</h2>" + looping2

// Driver Code, Jangan diganggu !
document.getElementById("jawaban1").innerHTML = jawaban1

// Soal No. 2
/* 
    Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu: 

    SYARAT: 
    A. Jika angka ganjil maka tampilkan Santai
    B. Jika angka genap maka tampilkan Berkualitas
    C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding. 

    OUTPUT 
    1 - Santai
    2 - Berkualitas
    3 - I Love Coding 
    4 - Berkualitas
    5 - Santai
    6 - Berkualitas
    7 - Santai
    8 - Berkualitas
    9 - I Love Coding
    10 - Berkualitas
    11 - Santai
    12 - Berkualitas
    13 - Santai
    14 - Berkualitas
    15 - I Love Coding
    16 - Berkualitas
    17 - Santai
    18 - Berkualitas
    19 - Santai
    20 - Berkualitas
*/     
var output= ""
for(var k=1; k<=20; k++) {
    if(k%2 == 1) {
        if(k%3 == 0) {
            output += k + ". I Love Coding <br>";
        }else {
            output += k + ". Santai <br>";
        }
    }else {
        output += k + ". Berkualitas <br>";
    }
}

var jawaban2 = output

document.getElementById("jawaban2").innerHTML = jawaban2