var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'img/logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'img/msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'img/genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'img/jerry.jpg']
];


// release 0 (menampilkan barang / item)
var listBarang = document.getElementById('listBarang');
function showItems(array) {
    var simpan = ""
    for(var i=0; i<array.length; i++) {
        var currentItem = array[i]
        simpan += `<div class="card" style="width: 18rem">
                    <img src="${currentItem[4]}" class="card-img-top" height="200px" width="200px" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="itemName">${currentItem[1]}</h5>
                    <p class="card-text" id="itemDesc">${currentItem[3]}</p>
                    <p class="card-text">Rp ${currentItem[2]}</p>
                    <a href="#" class="btn btn-primary" id="addCart" onclick=addCart()>Add to Cart</a>
                    </div>
                    </div>`
    }
    listBarang.innerHTML = simpan;
}

showItems(items);

// release 1 (memfilter items / barang)


// cara filter
// 0. function filter menerima sebuah parameter string keyword
// 1. bikin penampungan array kosong
// 2. lakukan looping, di setiap sekali loop cocokkan keyword dengan nama item sedang dalam looping
// 3. jika cocok keywordnya, masukkan penampung
// 4. return array tampungan

function filter(kataKunci) {
    var simpanArray = []
    for(var j=0; j < items.length; j++) {
        var item = items[j];
        var itemName = item[1];
        var isMatched = itemName.toLowerCase().includes(kataKunci.toLowerCase());

        if(isMatched == true) {
            simpanArray.push(item);
        }

    }
    return simpanArray
}

// var cekItem = kataKunci('eyb');
// console.log(cekItem);

//cari pake form submit
var formSearch = document.getElementById("formItem");

formSearch.addEventListener("submit", function(event){
    event.preventDefault();
    var keyword = document.getElementById("keyword").value;

    var terFilter = filter(keyword)
    showItems(terFilter)
}) 

//cari item pake keyup
var formCari = document.getElementById("keyword");
formCari.addEventListener("keyup", function(event) {
    var value = event.target.value;
    var filteredByKeyup = filter(value)
    showItems(filteredByKeyup);
})

var cartNumber = cart.value;
function addCart() {
    var cart = document.getElementById("cart");
    cartNumber++;
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartNumber})`
}