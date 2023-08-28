
const descricao = document.getElementById('descricao');
const qtdTarefas = document.getElementById('qtdTarefas');
const qtdConcluidas = document.getElementById('qtdConcluidas');
const tarefas = document.getElementById('tarefas');
const qtd = document.getElementById('concluidas')
const lista = [];
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(e){
    e.preventDefault();

    listarTarefas();
    quantidadeTarefas();
    limparInput();
})

const limparInput = () => descricao.value = '';

const listarTarefas = () => {

    if (descricao.value.length < 3)
        return console.log('campo em branco')
    
    let li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    li.innerHTML = `<span class='registro'>${descricao.value}</span>
                <div>
                    <button onclick="concluir(this)" title='concluir a tarefa'> &#10004; </button>
                    <button onclick="editar(this)" title='editar a tarefa'> &#128221; </button>
                    <button onclick="excluir(this)" title='excluir a tarefa'> &#10060; </button>
                </diV>`;

    tarefas.appendChild(li);

    lista.push(descricao.value);
    
}

const quantidadeTarefas = () => {

    if (lista.length < 1) {
        qtdTarefas.innerText = '';
    } else if(lista.length > 1) {
        qtdTarefas.innerText = `Você tem ${lista.length} tarefas`;
    } else {
        qtdTarefas.innerText = `Você tem ${lista.length} tarefa`;
    }
}

const quantidadeTarefasConcluidas = () => {

    const concluidas = document.querySelectorAll('.concluida').length;
    
    if (concluidas < 1) {
        qtdConcluidas.innerText = '';
    } else if (concluidas > 1) {
        qtdConcluidas.innerText = ` e ${concluidas} concluídas`
    } else {
        qtdConcluidas.innerText = ` e ${concluidas} concluída`
    }
}

const concluir = (li) => {
    
    const registro = li.parentElement.parentElement.querySelector('.registro');
    registro.classList.toggle('concluida');
    
    quantidadeTarefasConcluidas();
}

const excluir = li => {

    const registro = li.parentElement.parentElement.querySelector('.registro');

    if (confirm(`Excluir a tarefa: ${registro.textContent} ?`)) {
        lista.splice(lista.indexOf(registro.textContent), 1);
        li.parentElement.parentElement.remove();
        quantidadeTarefas();
        quantidadeTarefasConcluidas();
    }
}