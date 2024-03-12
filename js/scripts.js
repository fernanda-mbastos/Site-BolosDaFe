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

//funçao para página Contato - Formulário
findFormulario();

function findFormulario() {
  let formulario = document.querySelector('.formulario');

  if (formulario) {    

    const form = document.querySelector('#form')
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const telInput = document.querySelector('#tel')
    const saborSelect = document.querySelector('#sabor')
    const msgTextarea = document.querySelector('#msg')

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      //verifica se o nome está vazio
      

       //verificar se telefone está preenchido e é válido
       if(telInput.value === '' || !telValid(telInput.value)) {
        alert('Preencha com um telefone válido!')
        return;
      }if(nameInput.value === '') {
        alert('Preencha seu nome!')
        return;
      }
      //verificar se o e-mail está preenchido e é válido
      if(emailInput.value === '' || !emailValid(emailInput.value)) {
        alert('Preencha com um e-mail válido!')
        return;
      }

      // verificar sabor selecionado
      if(saborSelect.value === '') {
        alert('Selecione um sabor!')
        return;
      }

      //verificar a mensagem
      if(msgTextarea.value === '') {
        alert('Selecione um sabor!')
        return;
      }

      form.submit();

    });  
  
  } else {
    return;
  }
}

// função que valida telefone
function telValid(tel) {
   // cria uma regra para validar o email
   const telRegex = new RegExp(
    // (XX)XXXXX-XXXX
    /^(\d{2}|\(\d{2}\))\d{5}([-/.]\d{4}|\d{4})$/
   );

    if(telRegex.test(tel)) {
      return true;
    }
    return false;
}

//fução que valida e-mail
function emailValid(email) {
  // cria uma regra para validar o email
  const emailRegex = new RegExp(
    // usuario1234@dominio.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  }
  return false;
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