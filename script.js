const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual evento marcou o início da Nova Ordem Mundial, caracterizada por uma estrutura geopolítica multipolar?",
    alternativas: ["Fim da Guerra Fria", "AAssinatura do Tratado de Versalhes"],
  },
  {
    enunciado: "Qual dos seguintes países do Oriente Médio não faz parte da Organização dos Países Exportadores de Petróleo (OPEP)?",
    alternativas: ["Irã", "Israel"],
  },
  {
    enunciado: "Qual é o principal fator responsável pelo rápido envelhecimento da população brasileira nas últimas décadas?",
    alternativas: ["Aumento da expectativa de vida e redução da taxa de fecundidade", "Migração em massa de idosos para áreas urbanas"],
  },
  {
    enunciado: "Qual país é conhecido por sua política de neutralidade e por sediar importantes organizações internacionais, como a Cruz Vermelha e partes da ONU?",
    alternativas: ["Suíça", "Alemanha"],
  },
  {
    enunciado: "Qual evento histórico marcou o início da Revolução Francesa em 1789?",
    alternativas: ["Queda da Bastilha", "Coronamento de Napoleão Bonaparte"],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
  }
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
 }
}
  mostraPergunta();