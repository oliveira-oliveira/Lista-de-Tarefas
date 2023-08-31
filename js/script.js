
const descricao = document.getElementById('descricao');
const qtdTarefas = document.getElementById('qtdTarefas');
const qtdConcluidas = document.getElementById('qtdConcluidas');
const tarefas = document.getElementById('tarefas');
const qtd = document.getElementById('concluidas')
const lista = [];
const btnAdd = document.getElementById('btnAdd');
const btnExcluirTudo = document.getElementById('btn-limparLista');

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
                    <button class='btn-action' onclick="concluir(this)" title='concluir a tarefa'> &#10004; </button>
                    <button class='btn-action' onclick="editar(this)" title='editar a tarefa'> &#128221; </button>
                    <button class='btn-action' onclick="excluir(this)" title='excluir a tarefa'> &#10060; </button>
                </diV>`;

    tarefas.appendChild(li);

    lista.push(descricao.value);
    
}

btnExcluirTudo.addEventListener('click', function(e){
    e.preventDefault();
    
    if (confirm('Tem certeza que deseja limpar a lista?')) {
        lista.splice(0, lista.length);
        quantidadeTarefas();
        quantidadeTarefasConcluidas();
        tarefas.innerHTML = "";
    }
})

const quantidadeTarefas = () => {

    qtdTarefas.innerText = lista.length;
}

const quantidadeTarefasConcluidas = () => {

    const concluidas = document.querySelectorAll('.concluida').length;
    qtdConcluidas.innerText = concluidas;
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

const editar = li => {

    const registro = li.parentElement.parentElement.querySelector('.registro');
    const index = lista.indexOf(registro.textContent);

    const novoRegistro = prompt('Editar a tarefa: ', registro.textContent);

    if (novoRegistro.length >= 3) {
        
        if (confirm(`Confirma a alteração\nDe: ${registro.textContent}\nPara: ${novoRegistro} ?`)) {
    
            registro.textContent = novoRegistro;
    
            lista.splice(index, 1, novoRegistro)
        }
    } else {
        alert('Alteração inválida');
        console.error('Alteração inválida')
    }
}