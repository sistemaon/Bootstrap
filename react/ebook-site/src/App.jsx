
const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <img src="images/logo.png" alt="" width="225" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link fw-semibold">Home</a>
              </li>
              <li className="nav-item">
                <a href="#details" className="nav-link fw-semibold">Details</a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="btn btn-outline-light fw-semibold px-4 mx-3">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

const App = () => {
  return (
    <>
      <Menu />
    </>
  )
};

export default App;
