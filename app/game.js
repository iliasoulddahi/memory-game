const boxGroub = [
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false
    }
]

// akses dom ke main
const main = document.querySelector('#main')
let chekerCollection = []

// menampilkan & menambahkan semua event ke per box
for (let i = 0; i < boxGroub.length; i++) {
    const element = boxGroub[i];
    
    // pembuatan elemen baru untuk box
    const box = document.createElement('div')
    const img = document.createElement('img')
    img.src = "assets/flag_png/icon tanda tanya.png"
    box.id= "box"+i
    box.classList.add('box')
    box.appendChild(img)
    // ngepush ke elemen main
    main.appendChild(box)

    //PROSES PEMBUATAN EVENT DI SETIAP
    box.addEventListener('click', function(){
        img.src = element.src
        
        if(chekerCollection.length <= 1) {
            chekerCollection.push(element.src)
            console.log(chekerCollection)
            // melakukan pengecekan
            if(chekerCollection[0] === chekerCollection[1]) {
                element.terbuka = true
                boxGroub[i-1].terbuka = true
            } 
        }else {

            chekerCollection = []
        }
        //
        console.log(element.terbuka , boxGroub[i-1].terbuka)
        
    })
}

// argentina === coratia -> terbuka = tertutup