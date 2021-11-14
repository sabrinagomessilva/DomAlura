
//Botão Deletar tarefa
const BotaoDeleta = () => { //botão maiúsculo pq se trata de um compenente
    const botaoDeleta = document.createElement('button')
    
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa )

    return botaoDeleta

}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta

}

//criando módulos
export default BotaoDeleta