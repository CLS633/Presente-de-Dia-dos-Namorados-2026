const link = document.querySelector(".hearthTwo");
const corpo = document.body;
const h1 = document.getElementById("mensage");
const paragrafo = document.getElementById("paragrafo");
const love = document.getElementById("love");
const musica = document.getElementById("music")

let contador = 0;
let Amor = 20;

let fase = 1;
let fase2Ativa = false;
let bloqueioCliques = false;
let finalAtivado = false;

paragrafo.innerHTML = contador;
love.innerHTML = Amor;

alert ("Consiga o meu coração")

function teleportar() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  link.style.left = x + "px";
  link.style.top = y + "px";
}

function iniciarCutscene() {
  bloqueioCliques = true;

  h1.textContent = "Prove que seu amor por mim é poderoso!";

  setTimeout(() => {
    h1.textContent = "Você realmente não desiste de mim né <3";

    setTimeout(() => {
      h1.textContent = "Por isso me apaixonei por você!";

      setTimeout(() => {
        h1.textContent = "Se prepare, não é fácil chegar ao Núcleo do meu coração...";
        fase2Ativa = true;
        bloqueioCliques = false;
      }, 3000);

    }, 3000);

  }, 3000);
}

link.addEventListener("click", function () {
  musica.play()
  if (bloqueioCliques) return;

  corpo.style.backgroundImage = "url('/assets/Ceu estrelado.jpg')";

  contador++;
  paragrafo.innerHTML = contador;

  if (fase === 1 && contador >= 35) {
    fase = 2;
    iniciarCutscene();
    return;
  }

  if (fase2Ativa) {
    Amor++;
    love.innerHTML = Amor;
  }
});

setInterval(function () {
  if (!fase2Ativa || finalAtivado) return;

  if (Amor > 0) {
    Amor--;
    love.innerHTML = Amor;
  }

  if (Amor >= 67) {
    finalAtivado = true;
    window.location.href = "secaoDoAmor.html";
  }
}, 1000);

link.addEventListener("click", teleportar);