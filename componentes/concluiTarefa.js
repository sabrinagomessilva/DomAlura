//botão concluir
const   BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

 

    return botaoConclui

} 

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

//riscando a tarefa concluída
    tarefaCompleta.classList.toggle('done')
}

//criando módulos
export default BotaoConclui