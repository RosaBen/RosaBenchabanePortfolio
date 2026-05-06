export default function Navbar(){
  return(
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" aria-label="Rosa Benchabane Portfolio">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Rosa Benchabane</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-label="Toggle navigation" aria-expanded="false"  data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="navbar-collapse collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"  href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mentions Légales</a>
                        </li>
        </ul>
      </div>
        </div>
      </nav>
    </>
  )
}