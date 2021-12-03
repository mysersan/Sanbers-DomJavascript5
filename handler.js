var items = [
        ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
        ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
        ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
        ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
    ]

    var tampungBarang = document.getElementById('listBarang');
    
    function tampilBarang(array){
        var tampung="";
        for(var i = 0; i<array.length; i++){
            var loop = array[i];
            tampung +=
            `
            <!-- Component Card dari Bootstrap --> 
            <div class="card-group">
                <div class ="col-4 mt-2"> 
                <div class="card" style="width: 18rem;">
                    <img src="img/${loop[4]}" class="card-img-top" height="200px" width="200px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="itemName">${loop[1]}</h5>
                        <p class="card-text" id="itemDesc">${loop[3]}</p>
                        <p class="card-text">Rp. ${loop[2]}</p>
                        <a href="#" class="btn btn-primary" id="addCart" onclick="addCart()">Tambahkan ke keranjang</a>
                    </div>
                </div>
                </div></div>
            `
        }
        tampungBarang.innerHTML = tampung
    }
    tampilBarang(items)

    function filter(kataKunci){
        var filteredItem = [];
        for(var j=0; j<items.length; j++){
            var barang = items[j];
            var namaBarang = barang[1];
            var isMatch = namaBarang.toLowerCase().includes(kataKunci.toLowerCase());

            if(isMatch == true){
                filteredItem.push(barang);
            }
        }
    
    return filteredItem;
    }

    var Search =document.getElementById('formItem');
    Search.addEventListener("submit",function(event){
        event.preventDefault();
        var keyword = document.getElementById("keyword").value;

        var terfilter = filter(keyword)
        tampilBarang(terfilter);
    })

    var keranjang = document.getElementById('cart');
    var angkaKeranjang = keranjang.value;

    function addCart(){
        angkaKeranjang ++;
        keranjang.innerHTML = `<i class="fa fa-shopping-cart"></i>(${angkaKeranjang})`
    }