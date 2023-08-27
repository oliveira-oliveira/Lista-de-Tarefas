
const descricao = document.getElementById('descricao');
const quantidade = document.getElementById('quantidade');
const lista = [];
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(e){
    e.preventDefault();

    listarTarefas();
    limparInput();
})

const limparInput = () => descricao.value = '';

const listarTarefas = () => {

    let li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    li.innerText = descricao.value;

    let tarefas = document.getElementById('tarefas');
    tarefas.appendChild(li);

    lista.push(descricao.value);

    if(lista.length < 2){
        quantidade.innerText = `Você tem ${lista.length} tarefa`;
    } else {
        quantidade.innerText = `Você tem ${lista.length} tarefas`;
    }

}