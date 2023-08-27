
const descricao = document.getElementById('descricao');
const qtdTarefas = document.getElementById('qtdTarefas');
const qtdConcluidas = document.getElementById('qtdConcluidas');
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

    if (descricao.value.length < 4)
        return console.log('campo em branco')
    
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

    if (lista.length < 1) {
        qtdTarefas.innerText = '';
    } else if(lista.length > 1) {
        qtdTarefas.innerText = `Você tem ${lista.length} tarefas`;
    } else {
        qtdTarefas.innerText = `Você tem ${lista.length} tarefa`;
    }

    /*lista.length > 1 ? qtdTarefas.innerText = `Você tem ${lista.length} tarefas` : 
                    qtdTarefas.innerText = `Você tem ${lista.length} tarefa`;*/
}

const concluida = (li) => {
    li.classList.toggle('concluida');

    const concluidas = document.querySelectorAll('.concluida').length;
    
    if (concluidas < 1) {
        qtdConcluidas.innerText = '';
    } else if (concluidas > 1) {
        qtdConcluidas.innerText = ` e ${concluidas} concluídas`
    } else {
        qtdConcluidas.innerText = ` e ${concluidas} concluída`
    }

    /*concluidas > 1 ? qtdConcluidas.innerText = ` e ${concluidas} concluídas` : 
                    qtdConcluidas.innerText = ` e ${concluidas} concluída`;*/
}