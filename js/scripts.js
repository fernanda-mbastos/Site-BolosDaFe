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

      let idChoco = document.getElementById('img-choco');
      let idCeno = document.getElementById('img-ceno');
      createTag();
        if (idChoco) {
          // BOLO DE chocolate  
          criateTextChoco("Bolo de Chocolate", "O bolo de chocolate é o preferido das crianças! Sua textura úmida e sua cor vibrante são qualidades bastantes admiradas por todos que provam esse delicioso bolo!");          
          showText(); 
        }          
  } else {
    return;
  }
}

// função criar texto para as imagens dos bolos 

function criateTextChoco(title, text) {

  let newTitle = document.createTextNode(title)
  let newText = document.createTextNode(text);
  let pTitle = document.getElementById("h2-bolo");
  let pBolo = document.getElementById("p-bolo");
  
  pTitle.appendChild(newTitle);
  pBolo.appendChild(newText);
  
}

// funçao criar tag para os textos dos bolos

function createTag() {
  let newDiv = document.createElement('div');
  let img = document.getElementById('bolos');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  img.appendChild(newDiv);
  newDiv.id = 'txt-bolo';
  newDiv.appendChild(h2);
  h2.id = 'h2-bolo';
  newDiv.appendChild(p);
  p.id = 'p-bolo';  
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
