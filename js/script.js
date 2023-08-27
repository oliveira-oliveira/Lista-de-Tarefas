
const descricao = document.getElementById('descricao');
const qtdTarefas = document.getElementById('qtdTarefas');
const qtd = document.getElementById('concluidas')
const lista = [];
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(e){
    e.preventDefault();

    listarTarefas();
    limparInput();
    total();
})

const limparInput = () => descricao.value = '';

const listarTarefas = () => {

    let li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    li.innerText = descricao.value;

    let tarefas = document.getElementById('tarefas');
    tarefas.appendChild(li);

    lista.push(descricao.value);
    
    li.onclick = function(e){
        e.preventDefault();
        concluida(this);
    }
}

const total = () => {
    lista.length > 1 ? qtdTarefas.innerText = `Você tem ${lista.length} tarefas` : 
                    qtdTarefas.innerText = `Você tem ${lista.length} tarefa`;
}

const concluida = (li) => {
    li.classList.toggle('concluida');

    const concluidas = document.querySelectorAll('.concluida').length;
    const qtdConcluidas = document.getElementById('qtdConcluidas');

    concluidas > 1 ? qtdConcluidas.innerText = ` e ${concluidas} concluídas` : 
                    qtdConcluidas.innerText = ` e ${concluidas} concluída`;
}