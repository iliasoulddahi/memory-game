/*
    BAGIAN MANIPULASI BOX
*/
const boxGroub = [
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/croatia.png",
        terbuka:false,
        id:null
    },
    {
        src:"assets/flag_png/argentina.png",
        terbuka:false,
        id:null
    }
]

// akses dom ke main
const main = document.querySelector('#main')
let chekerCollection = []
let boxTerclick = []
// menampilkan & menambahkan semua event ke per box
for (let i = 0; i < boxGroub.length; i++) {
    const element = boxGroub[i];
    
    // pembuatan elemen baru untuk box
    const box = document.createElement('div')
    const img = document.createElement('img')
    img.src = "assets/flag_png/icon_tandaTanya.png"
    box.id= "box"+i
    boxGroub[i].id = 'box'+i
    box.classList.add('box')
    box.appendChild(img)
    // ngepush ke elemen main
    main.appendChild(box)

    //PROSES PEMBUATAN EVENT DI SETIAP
    box.addEventListener('click', function(){
        img.src = element.src
        boxTerclick.push(element.id)
        if( chekerCollection.length <= 1 ) {
            chekerCollection.push( element.src )
            console.log( chekerCollection )
            // melakukan pengecekan
            if( chekerCollection[0] === chekerCollection[1] ) {
                element.terbuka = true
                boxGroub[i-1].terbuka = true
            }  
            if(!(chekerCollection[0] === chekerCollection[1]) && chekerCollection.length===2 && boxTerclick.length <=2) {
                // element.src = "assets/flag_png/icon_tandaTanya.png"
                setTimeout(function(){
                    //code goes here
                    img.src = "assets/flag_png/icon_tandaTanya.png"
                document.querySelector('#'+boxTerclick[0] + ' img').src = "assets/flag_png/icon_tandaTanya.png"
                console.log(boxTerclick)
               }, 800);
            }   
        }else {

            chekerCollection = []
            boxTerclick = []
            
        }
        //
        console.log( element , boxGroub[i-1].terbuka, boxTerclick )
        
    })
}

/**
 * BAGIAN TIMER
//  */
//  var now = new Date().getTime();
//  var timeleft = countDownDate - now;
 
//  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


var d = new Date();
var millisecondssince1970 = d.getTime();
var newMillisec = millisecondssince1970 + (100 * 60);

var countDownDate = new Date(newMillisec);

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  if (distance < 0) {
    //DIEKSEKUSI SETELAH WAKTU HABIS
    main.innerHTML = "<h1>WAKTU HABIS</h1>"
  }
}, 1000);
