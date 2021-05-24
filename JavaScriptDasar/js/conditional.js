var form = document.getElementById("formConditional")
    var jawaban = document.getElementById("jawaban")

    form.addEventListener("submit", function(e) {
        e.preventDefault()

        /* 
            ATURAN PERMAINAN 
            // Output untuk Input nama = '' dan peran = ''
            // => "Nama harus diisi!"
    
            //Output untuk Input nama = 'Mikael' dan peran = ''
            // => "Halo Mikael, Pilih peranmu untuk memulai game!"
    
            //Output untuk Input nama = 'Nina' dan peran 'Penyihir'
            // => "Selamat datang di Dunia Werewolf, Nina"
            // => "Halo Penyihir Nina, kamu dapat melihat siapa yang menjadi Werewolf!"
    
            //Output untuk Input nama = 'Danu' dan peran 'Werewolf'
            // => "Selamat datang di Dunia Werewolf, Danu"
            // "Halo Werewolf Danu, kamu dapat memilih siapa untuk dimakan malam ini!"
    
            //Output untuk Input nama = 'Zero' dan peran 'Rakjel'
            // => "Selamat datang di Dunia Werewolf, Zero"
            // => "Halo Rakjel Zero, Kamu menjadi rakyat jelata "
    
            PETUNJUK MENGERJAKAN
            1. Buat Kondisional agar output dari konsol sesuai yang diharapkan
            2. masukkan lah jawaban dari kondisi yang diberikan oleh User ke dalam variabel jawabanKonsol
        */

        // Tuliskan Code kamu di sini
        var name = document.getElementById("name").value
        var role = document.getElementById("role").value       
        // buatlah kondisional berdasarkan dua variabel di atas yaitu name dan role, ketentuannya dapat dibaca di atas
        var output = "";
        if(name != "") {
            if(role == "Penyihir" && name == "Nina") {
                output += "Selamat datang di Dunia Werewolf, " +name + "<br>" + "Hallo Penyihir " + name + ", kamu dapat melihat siapa yang menjadi Werewolf";
            }else if(role == "Werewolf" && name == "Danu") {
                output += "Selamat datang di Dunia Werewolf " + name + "<br>" + "Hallo Werewolf " + name + ", kamu dapat memilih siapa untuk dimakan malam ini.";
            }else if(role == "Rakjel" && name == "Zero"){
                output += "Selamat datang di Dunia Werewolf " + name + "<br>" + "Halo Rakjel Zero, Kamu menjadi rakyat jelata";
            } else if(role == "" && name == "Mikael"){
                output += "Halo " +name + ", Pilih peranmu untuk memulai game!"
            } else {
                output += "Kamu bukan dari bagian Werewolf";
            }
        }else {
            output += "Silahkan isi nama dan role-nya";
        }


        var jawabanKonsol = output
        jawaban.innerHTML = jawabanKonsol
    })