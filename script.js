// Selecionar 
const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

// adicionar tarefa
adicionarBtn.addEventListener("click", function() {
    adicionarTarefa();
});

// Enter
tarefaInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

//adicionar tarefa
function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto !== "") {
        // Criarnovo item 
        const li = document.createElement("li");
        li.textContent = tarefaTexto;

        // remover tarefa
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.addEventListener("click", function() {
            listaTarefas.removeChild(li);
        });

        // Adicionar o botão 
        li.appendChild(removerBtn);

        // item de lista à lista de tarefas
        listaTarefas.appendChild(li);

        // Limpar campo entrada
        tarefaInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida!");
    }
}

// Marcar como concluída 
listaTarefas.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});
