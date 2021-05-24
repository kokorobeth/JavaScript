/* 
            SOAL NO. 1 Balik Kalimat 
            Tipe data String dapat dilihat sebagai tipe data array. Kita dapat mengakses karakter-karakter pada sebuah string seperti mengakses elemen pada array.
            Buatlah sebuah fungsi dengan nama balikString(). Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
            
            Catatan: TIDAK Boleh menggunakan reverse, wajib dengan looping!

            Contoh: 
            balikString("abduh coding") 
            akan memberikan output: "gnidoc hudba"

            Hint: Gunakan properti length dari string untuk mencari tahu panjang string
        */
        // Code Kamu di sini
        var output = "";
        function balikString(kalimat) {
            for(var i = kalimat.length - 1; i >= 0; i--) {
                output += kalimat[i];
            }
            return output;
        }
        
        // Driver Code, jangan diganggu!
        var formBalikString = document.getElementById("balikString")
        formBalikString.addEventListener("submit", function(e) {
            e.preventDefault()
            var word = document.getElementById("word").value
            var reverseWord = balikString(word)

            document.getElementById("jawaban1").innerHTML = reverseWord
        })

        
        
        /* 
            SOAL NO. 2 LOOPING PADA ARRAY
            Buatlah sebuah fungsi dengan nama dataHandling() dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:

            var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

            Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

            Nomor ID:  0001
            Nama Lengkap:  Roman Alamsyah
            TTL:  Bandar Lampung 21/05/1989
            Hobi:  Membaca

            Nomor ID:  0002
            Nama Lengkap:  Dika Sembiring
            TTL:  Medan 10/10/1992
            Hobi:  Bermain Gitar

            Nomor ID:  0003
            Nama Lengkap:  Winona
            TTL:  Ambon 25/12/1965
            Hobi:  Memasak

            Nomor ID:  0004
            Nama Lengkap:  Bintang Senjaya
            TTL:  Martapura 6/4/1970
            Hobi:  Berkebun

        */

        var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
        
        // Code kamu di sini, lakukan looping terhadap input di atas
        
        function dataHandling(array) {
            var simpan = "";
            for (var i=0; i<array.length; i++) {
                simpan += "ID : " + array[i][0] + "<br>" + "Nama : " + array[i][1] + "<br>" + "Kota : " + array[i][2] + "<br>" + "TTL : " + array[i][3] + "<br>" + "Hobi : " + array[i][4] + "<br><br>";  
            }
            return simpan;
        }
        var jawaban2 = dataHandling(input);
        document.getElementById("jawaban2").innerHTML = jawaban2  