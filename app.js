
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
      
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCart">Create Item</button>


<div className="modal fade" id="modalCart" tabIndex="" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
   
      <div className="modal-header">
        <h4 className="modal-title" id="myModalLabel">Your cart</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
   
      <div className="modal-body">

        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr className="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>

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






class App extends React.Component {
  state = {

    Item: '',
    Name: '',
    Description: '',
    Price: '',
    Img: '',
    Cat: '',
    Qty: '',
    Reord_Qty: '',
    items: [] 
}

componentDidMount = () => {
    this.getdata();
}

// componentWillMount = (prevState) => {
//     this.getdata();
// }

getdata = () => {
    axios.get('/lbatx').then(
        (response) => {
            console.log(response.data, 'get data response');
            this.setState({
                items: response.data
            }
        )
    })
}

createItem = (event) => {
    event.preventDefault();
    console.log(this.state.items);
    axios.post(
      '/lbatx',
      {
        item:this.state.Item,
        name:this.state.Name,
        description:this.state.Description,
        price: this.state.Price,
        img:this.state.Img,
        cat: this.state.Cat,
        qty:this.state.Qty,
        reord_qty: this.state.Reord_Qty,
      }
      )
    .then((response) => {
        console.log(response.data, 'create item response');
        
    })
    .then(() => {
        this.getdata();
    })
  }


  ///////////////  NEW ITEM   /////////////
  onInputChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
}


  updateItem = (event) => {
      event.preventDefault();
      const id = event.target.getAttribute('id');
      axios.put(
          '/lbatx/' + id,
          {
              item:this.state.Item,
              name:this.state.Name,
              description:this.state.Description,
              price: this.state.Price,
              img:this.state.Img,
              cat: this.state.Cat,
              qty:this.state.Qty,
              reord_qty: this.state.Reord_Qty,
          }
      )
      .then((response) => {
          this.setState({
              items: response.data
          })
      })
  }

  deleteItem = (event) => {
      axios.delete('/lbatx/' + event.target.value).then(
          (response) => {
              this.setState(
                  {
                      items: response.data
                  }
              )
          }
      )
  }



    render = () => {
        return <div className="Inventory-container">

         <Nav />

            <CreateItem 
              createItem={this.createItem}
              onInputChange={this.onInputChange}
              Item={this.state.Item}
              Name={this.state.Name}
              Description={this.state.Description}
              Price={this.state.Price}
              Img={this.state.Img}
              Cat={this.state.Cat}
              Qty={this.state.Qty}
              Reord_Qty={this.state.Reord_Qty}
            />

            {/* <InventoryDetail 
              updateItem={this.updateItem}
              onInputChange={this.onInputChange}
              Item={this.state.Item}
              Name={this.state.Name}
              Description={this.state.Description}
              Price={this.state.Price}
              Img={this.state.Img}
              Cat={this.state.Cat}
              Qty={this.state.Qty}
              Reord_Qty={this.state.Reord_Qty}
             /> */}
            
            <Footer />
        </div>
        
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
