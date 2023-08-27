
const descricao = document.getElementById('descricao');
const quantidade = document.getElementById('quantidade');
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
    lista.length > 1 ? quantidade.innerText = `Você tem ${lista.length} tarefas` : quantidade.innerText = `Você tem ${lista.length} tarefa`;
}

const concluida = (li) => {
    li.classList.toggle('concluida');

    const qtdDoncluidas = document.querySelectorAll('.concluida').length;

    qtdDoncluidas > 1 ? document.getElementById('concluidas').innerText = ` e ${qtdDoncluidas} concluídas` : document.getElementById('concluidas').innerText = ` e ${qtdDoncluidas} concluída`;

}