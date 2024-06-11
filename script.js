function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você acorda alguns metros longe dos destroços do aviao, decide mergulhar dentre os destroços e encontra 2 itens, uma carteira e um facão: </h3>';
  formation += '<img src="lyvia/gif2.gif" class="imgs">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()">pegar a faca</button>';
  formation += '<button onclick="Escolha2()">pegar a carteira</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce pegou a faca, e agora pode caçar alimentos, e cortar arvores e etc: </h3>';
  formation += ' <img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha11()">tentar caçar algum animal</button>';
  formation += '<button onclick="Escolha155()">tentar fazer um abrigo</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você achou um porco e o-trouxe ate o local inicial. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha111()">fazer uma fogueira</button>';
  formation += '<button onclick="Escolha112()">guardar</button>';
  $(".principal").append(formation);
}


function Escolha155() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> no meio do caminho voce achou um porco. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha12()">atacar</button>';
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> uma alcateia te achou pelo cheiro do porco fresco, voce se escondeu por pouco.';
  formation += '<br>';
  formation += '<button onclick="Escolha111()">fazer a fogueira</button>';
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce com sua faca, pegou alguns galhos e usou a tatica de fricção para fogueira. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111()">assar o porco</button>';
  formation += '<button onclick="Escolha1112()">se aquecer</button>';
  $(".principal").append(formation);
}

function Escolha1112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> esta de tarde e ainda nao esta frio, voce esta com fome. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111()">assar o porco</button>';
  formation += '<button onclick="Escolha1112()">se aquecer</button>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce assa o porco e o consome, voce nao esta mais com fome e agora?. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha11111()">Fazer um sinal de SOS na orla</button>';
  formation += '<button onclick="Escolha11112()">explorar mais a ilha</button>';
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce se depara com lobos, eles te atacam e voce morre.. </h3>'
  formation += '<button onclick="Escolha11111()">Continuar</button>';
  $(".principal").append(formation);
}

var formation = ''
function Escolha11111() {
  formation += '<br>';
  formation += '<h3> Voce tem que decidir quais materiais usar para fazer o sinal. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha111111()">galhos</button>';
  formation += '<button onclick="Escolha111112()">pedras</button>';
  $(".principal").append(formation);
}
var formation = ''
function Escolha111112() {
  formation += '<br>';
  formation += '<h3>depois de um tempo um aviao de resgate viu seu sinal e te resgatou, vc sobreviveu.</h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> os galhos eram leves demais, e quando a maré subiu na primeira onda a agua levou tudo, agora voce esta cansado sem resultados. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111111()">refazer com pedras</button>';
  formation += '<button onclick="Escolha1111112()">tentar nadar ate achar algum barco de pescadores</button>';
  $(".principal").append(formation);
}

function Escolha1111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> as buscas começaram logo depois, te acharam e voce foi resgatado. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha1111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Você fica muito cansado durante a viagem e morre afogado durante uma tempestade de ondas grandes. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}



function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce conseguiu pegar um porco, e na volta avistou algumas pessoas proximas aos destroços. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha121()">tentar conversar e saber quem sao</button>';
  formation += '<button onclick="Escolha122()">ataca-los sorrateiramente </button>';
  formation += '<button onclick="Escolha123()">assusta-los</button>';
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você conversa com eles,e descobre que estavam a sua procura, eles te salvaram e voce sobreviveu. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> eles eram bombeiros e estavam a sua procura, voce perdeu a ajuda e morreu. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha123() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>eram bombeiros tentando te ajudar, voce os-matou e ficou preso na ilha. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}


function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> a carteira tinha apenas uns documentos e dinheros encharcados, nao serve para nada . </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha21()">guardar</button>';
  formation += '<button onclick="Escolha22()">jogar fora</button>';
  $(".principal").append(formation);
}

function Escolha22() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce jogou fora. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha21()">continuar</button>';
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> agora decide tentar tentar pegar a faca que havia decidido deixar para trás </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha211()">nao pegar</button>';
  formation += '<button onclick="Escolha1()">pegar a faca</button>';
  $(".principal").append(formation);
}


function Escolha211() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> voce ficou sem recursos e morreu. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  $(".principal").append(formation);
}















