import logo from '../../assets/img/Marca-IBJM.png'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>

                </div>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="60" height="60" alt="" />
                </a>
                <a className="navbar-brand" href="#">
                    <h1 className="fonte-titulo mx-auto">Integra Igreja</h1>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Administração<span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ministerio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Membro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Minhas informações</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>

    )
}

export default Header