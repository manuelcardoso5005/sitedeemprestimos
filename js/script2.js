const header = document.querySelector('#header-area');
header.innerHTML = 
`
    <div class="menu-area">
        <a href="index.html" class="logo-area">
            <img src="img/logo.png" alt="">
        </a>
        <nav class="menu">
            <i class="bi bi-list"></i>
            <ul>
                <li><a href="lend.html" class="active-menu">Novo Emprestimo</a>
                <li><a href="#">Sobre</a></li>
            </ul>
        </nav>
    </div>
`

const footer = document.querySelector('#foooter-area');
footer.innerHTML = ` <p>&copy; Site de Emprestimos - Direitos Reservados</p>`

const rangeValor = document.getElementById('rangeValor');
const rangeMeses = document.getElementById('rangeMeses');
const displayValor = document.querySelector('.valor');
const displayMeses = document.querySelector('.meses');
const displayPagamento = document.querySelector('.pagamento');
const message = document.querySelector('.sucess-message2');
const btnPedir = document.querySelector('.pedir-btn');
const formCont = document.querySelector('.form-pedir')

function formatarValor(valor) {
    return `${valor.toLocaleString()} Kz`;
}

function calcularPagamentoMensal(valor, meses) {
    const taxaDeJuros = 0.05; // 5% 
    const jurosMensal = taxaDeJuros / 12;
    const valorTotal = valor * (1 + jurosMensal * meses);
    return valorTotal / meses;
}

function atualizarValores() {
    const valor = parseInt(rangeValor.value);
    const meses = parseInt(rangeMeses.value);

    // Atualiza a exibição dos valores
    displayValor.textContent = formatarValor(valor);
    displayMeses.textContent = `${meses} Meses`;

    // Calcula o pagamento mensal
    const pagamentoMensal = calcularPagamentoMensal(valor, meses);
    displayPagamento.textContent = formatarValor(pagamentoMensal);
}

// Adiciona eventos para atualizar os valores quando o usuário interage com os controles
rangeValor.addEventListener('input', atualizarValores);
rangeMeses.addEventListener('input', atualizarValores);

// Inicializa os valores exibidos
atualizarValores();

btnPedir.addEventListener('click', ()=>{
    formCont.style.display =' none';
    message.style.display = "block";
});