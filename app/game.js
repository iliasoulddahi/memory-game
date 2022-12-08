// // const div = document.querySelector('.box')

// document.querySelector('body').style.backgroundImage = 'url(assets/page/Background.png)'
const flags = [
    "assets/flag_png/argentina.png",
    "assets/flag_png/australia.png",
    "assets/flag_png/brazil.png",
    "assets/flag_png/croatia.png",
    "assets/flag_png/england.png",
    "assets/flag_png/france.png",
    "assets/flag_png/germany.png",
    "assets/flag_png/indonesia.png",
    "assets/flag_png/japan.png",
    "assets/flag_png/morocco.png",
    "assets/flag_png/netherlands.png",
    "assets/flag_png/poland.png",
    "assets/flag_png/portugal.png",
    "assets/flag_png/senegal.png",
    "assets/flag_png/sk.png",
    "assets/flag_png/spain.png",
    "assets/flag_png/swiss.png",
    "assets/flag_png/usa.png",
  ];
  
  function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  
  let randomFlags = shuffle(flags);
  
  
  
  
  const boxes = document.querySelectorAll(".box");
  
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    let qimg = document.createElement("img"); //quest img
    qimg.className = "quest";
    qimg.src = "assets/flag_png/icon_tandaTanya.png";
  
    let fimg = document.createElement("img"); // flag img
    fimg.className = "flag";
    fimg.src = randomFlags[i];
    fimg.style.display = "none";
  
    element.appendChild(qimg);
    element.appendChild(fimg);
  }
  
  let terbuka = [];
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    element.id = 'box'+i
  
    element.addEventListener("click", (e) => {
      terbuka.push(element.id);
      
  
      //variable
      let boxSekarang = document.querySelector('#'+terbuka[1])
      let boxTerakhir = document.querySelector('#'+terbuka[0])
      // console.log(boxSekarang.lastChild.src, 'box sekarang')
      // console.log(boxTerakhir.lastChild.src, 'box terakhir')
      console.log(terbuka, 'terbuka')
      function showQuest(el) {
        el.classList.remove("rotate");
        function hide() {
          el.querySelector(".flag").style.display = "none";
        }
        function show() {
          el.querySelector(".quest").style.display = "block";
        }
  
        setTimeout(show, 300);
        setTimeout(hide, 290);
      }
  
      function showFlag(el) {
        el.classList.add("rotate");
        function show() {
          el.querySelector(".flag").style.display = "block";
        }
        function hide() {
          el.querySelector(".quest").style.display = "none";
        }
        setTimeout(show, 300);
        setTimeout(hide, 290);
      }
      
      showFlag(element)
  
      if (terbuka.length > 1) {
        if(boxSekarang.lastChild.src !== boxTerakhir.lastChild.src){
          setTimeout(function(){
            //code goes here
            showQuest(boxSekarang)
            showQuest(boxTerakhir)
         }, 1000);
          
        }
        terbuka = []
      }  // return apabila yang terbuka sudah 2
      
    });
  }
  
  
  
  
  //TIMER
  var d = new Date();
  var millisecondssince1970 = d.getTime();
  var newMillisec = millisecondssince1970 + (400 * 60);
  
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