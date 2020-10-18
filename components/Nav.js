//====================================================
// NavBar
//====================================================

const Nav = (props) => {
    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Lady Bird Atx </a>
        <a className="nav-item nav-link active" href="#" onClick={props.onClickHandler}>Inventory</a>
        <a className="nav-item nav-link" href="#">Vendors</a>
        <a className="nav-item nav-link" href="#">Reorder</a>
        <a className="nav-item nav-link" href="#">Add Item</a>


      </div>

  </nav>


  }
