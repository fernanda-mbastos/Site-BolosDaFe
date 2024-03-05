// função para localizar o botão na pagina Home e incluir video
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

//funçao para página Nossos Bolos
findNossosBolos();

function findNossosBolos() {
  let nossosBolos = document.querySelector('.nossos-bolos');

  if (nossosBolos) {    
  
    showText();
  
  } else {
    return;
  }
}

//função para passar o mouse em cada imagem dos bolos

function showText() {
  let img = document.querySelectorAll(".img-bolo");
  let txtBolo = document.querySelectorAll('.txt-bolo');

  for(let i=0; i<img.length ; i++) {

    img[i].addEventListener("mousemove", function() { 

        txtBolo[i].style.display = 'block';          
            
    });

    img[i].addEventListener("mouseleave", function() { 

      txtBolo[i].style.display = 'none';          
          
  });   
  }    
}




/* funçao criar tag para os textos dos bolos
    function createTag(title, text) {
  //cria as tags div, h2, p em cada imagem de cada bolo
 
  let img = document.querySelectorAll('.img');
 
  for (i=0;i<img.length;i++) {
    let newDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    img[i].appendChild(newDiv);
    newDiv.id = 'txt-bolo';
    newDiv.appendChild(h2);
    h2.id = 'h2-bolo';
    newDiv.appendChild(p);
    p.id = 'p-bolo';
  }

   
  //criar os textos que vão nas tags
  let newTitle = document.createTextNode(title)
  let newText = document.createTextNode(text);
  let pTitle = document.getElementById('h2-bolo');
  let pBolo = document.getElementById('p-bolo');

  pTitle.appendChild(newTitle);
  pBolo.appendChild(newText);
} */