const botao = document.getElementById("botao");
const carta = document.getElementById("cart");
const musica = document.getElementById("musica");
const envelope = document.getElementById("card")


alert ("Abra a carta");

envelope.addEventListener ("click", function() {
musica.play();
}) 


botao.addEventListener("click", function() {

carta.innerHTML =  "Quando olho para trás eu vejo que tudo acabou valendo muito a pena. A gente está construindo um namoro excepcional, daqueles em que a gente aprende a amar os detalhes um do outro. Eu amo quando você compartilha as suas aleatoriedades comigo, amo ver você sendo você mesma, e alegro-me em saber que, do seu jeito, o seu coração me escolheu como a sua maior prioridade. Aquele 'ataque de amor' que você passou a noite escrevendo para mim e cada presente artesanal carinhoso que você prepara me mostram que o nosso amor não precisa de regras ou padrões perfeitos para ser real. Ele é real na nossa relação, nas nossas conversas e na forma como a gente sempre escolhe caminhar na mesma página. <button id='botao2'>Continuar lendo</button>";

const botao2 = document.getElementById("botao2");

botao2.addEventListener("click", function() {

carta.innerHTML = "O futuro chegará em breve, e olhar pra frente sabendo que tenho você ao meu lado me dá ainda mais coragem para dar o meu máximo todos os dias. Eu sei que a nossa história está sendo escrita de pouco em pouco, com a benção de Deus guiando cada plano nosso. Eu quero continuar sendo o seu porto seguro, o cara que te apoia, que treina, estuda e evolui buscando sempre o nosso melhor. Que a gente continue cultivando essa nossa parceria única, enfrentando qualquer fase ou chefão que a vida colocar no nosso caminho. Obrigado por ser a donzela da minha jornada. Eu te amo hoje, amanhã e em cada próxima página que a gente decidir programar junto. Feliz Dia dos Namorados! ❤️"

})

})



