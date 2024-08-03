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
                <li><a href="index.html">Início</a>
                <li><a href="lend.html">Novo Emprestimo</a>
                <li><a href="#">Sobre</a></li>
            </ul>
            <div class="register-area-mobile">
                <button>Entrar</button>
                <button>Registar-se</button>
            </div>
        </nav>
    </div>
    <div class="register-area">
        <button><a href="login.html">Entrar</a></button>
        <button><a href="register.html">Registar-se</a></button>
    </div>
`

const footer = document.querySelector('#foooter-area');
footer.innerHTML = ` <p>&copy; Site de Emprestimos - Direitos Reservados</p>`