
const calendario = document.querySelector('.calendario');
const tituloMes = document.querySelector('#titulo-mes');
const mesAnterior = document.querySelector('#mes-anterior');
const mesProximo = document.querySelector('#mes-proximo');
const tabelaCalendario = document.querySelector('#tabela-calendario');
const tbodyCalendario = document.querySelector('#tabela-calendario tbody');

let data = new Date();

mesAnterior.addEventListener('click', () => {
    data.setMonth(data.getMonth() - 1);
    renderizarCalendario();
});

mesProximo.addEventListener('click', () => {
    data.setMonth(data.getMonth() + 1);
    renderizarCalendario();
});

function renderizarCalendario() {
    const mesAtual = data.getMonth();
    const anoAtual = data.getFullYear();
    const diasDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

    tituloMes.innerHTML = `${meses[mesAtual]} ${anoAtual}`;

    tbodyCalendario.innerHTML = '';

    let diaAtual = 1;

    for (let i = 0; i < 6; i++) {
        const linha = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const celula = document.createElement('td');

            if (i === 0 && j < primeiroDiaSemana) {
                const textoCelula = document.createTextNode('');
                celula.appendChild(textoCelula);
            } else if (diaAtual > diasDoMes) {
                break;
            } else {
                const textoCelula = document.createTextNode(diaAtual);
                celula.appendChild(textoCelula);
                diaAtual++;
            }

            linha.appendChild(celula);
        }

        tbodyCalendario.appendChild(linha);
    }
}

const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function RedirecionaAgendaUsuario() {
    window.location.href = "/AgendaUsuario/index.html";
  }

  function RedirecionaFicha() {
    window.location.href = "/Fichas/Ficha%20aluno/modelo%20de%20ficha.html";
  }

  function RedirecionaExercicios() {
    window.location.href = "/Exercicios/index.html";
  }

renderizarCalendario();


