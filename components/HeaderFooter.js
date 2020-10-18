//====================================================
// NavBar
//====================================================

const Nav = () => {
    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Lady Bird Atx </a>
        <a className="nav-item nav-link active" href="#">Inventory </a>
        
        <a className="nav-item nav-link" href="#">Vendors</a>
        <a className="nav-item nav-link" href="#">Reorder</a>
        
  
  
      </div>
    
  </nav>
  
  
  }
  
  
  //====================================================
  // Footer
  //====================================================
  const Footer = () => {
  
  return <footer className="fixed-bottom page-footer font-small unique-color-dark pt-4">
  
  
  <div className="container">
  
   
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="btn btn-outline-white btn-rounded">Sign up!</a>
      </li>
    </ul>
   
  
  </div>
  
  
  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  
  
  </footer>
      
  }