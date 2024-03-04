// função para localizar o botão na pagina Home
let btn = document.getElementById('button');

findButton();

function findButton () { 
  if (btn) {
    function createVideo() {
      let video = document.getElementById('video');
      let newVideo = document.createElement('video');
  
      newVideo.src = "imagens/videoBolo.mp4";

        // atributos do video
        newVideo.setAttribute('id', 'myVideo');
        newVideo.setAttribute('width', '300px');
        newVideo.setAttribute('height', '300px');
        newVideo.setAttribute('autoplay', 'true');
        newVideo.setAttribute('loop', 'true');
        video.appendChild(newVideo);

    }

    btn.addEventListener("click", createVideo);

  } else {
    return;
  }
}

findNossosBolos();

function findNossosBolos() {
  let nossosBolos = document.querySelector('.nossos-bolos');

  if (nossosBolos) { 

      let id = document.getElementById('img-choco');
      if (id) {
        // BOLO DE chocolate     
        criateText("Bolo de Chocolate", "O bolo de chocolate é o preferido das crianças! Sua textura úmida e sua cor vibrante são qualidades bastantes admiradas por todos que provam esse delicioso bolo!");          
        showText();     
      }
   
  } else {
    return;
  }
}


// função criar texto para as imagens dos bolos

function criateText(title, text) {

  let newTitle = document.createTextNode(title)
  let newText = document.createTextNode(text);
  let pTitle = document.getElementById("h2-bolo");
  let pBolo = document.getElementById("p-bolo");
  
  pTitle.appendChild(newTitle);
  pBolo.appendChild(newText);
  
}

// funcão aparecer texto na imagem do bolo

function showText() {
  let img = document.querySelector(".img"); 
  let txtBolo = document.querySelector("#txt-bolo"); 
    img.addEventListener("mouseenter", function() {
      txtBolo.style.display = 'block';  
     })
    img.addEventListener("mouseleave", function() {
      txtBolo.style.display = 'none';  
    })
}
