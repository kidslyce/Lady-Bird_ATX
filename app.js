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
    items: [],
    screenToShow: '',
    reorder: []
}

inventoryClick = () => {
    this.setState({
        screenToShow: 'Inventory'
    })
}
reorderClick = () => {
    this.setState({
        screenToShow: 'Reorder'
    })
}
createClick = () => {
    this.setState({
        screenToShow: 'Create'
    })
}

getdata = () => {
    axios.get('/lbatx').then(
        (response) => {
            console.log(response.data, 'get data response');
            this.setState({
                items: response.data,
                screenToShow: 'Inventory'
            }
        )
    })
}

getReorder = () => {
    axios.get('/lbatx2').then(
      (response) => {
            console.log(response.data, 'get data response from reorder');
            this.setState({
              reorder: response.data,
              screenToShow: 'Reorder'
            }
          )
            console.log(this.state.reorder, 'get state response from reorder');
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

onClickHandler = () => {
    this.getdata();
}
    render = () => {
      let screen = null;
      switch(this.state.screenToShow){
        case 'Create':
          screen = <CreateItem
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
          break;
        case 'Inventory':
          screen = <InventoryDetail
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
            items={this.state.items}
            deleteItem={this.deleteItem}
          />
          break;
        case 'Reorder':
          console.log('we are in reorder')
          screen =<div className ='reorder'>
            <ul>
              {this.state.reorder.map((items) =>{
                return(
                  <div key={items.id}>
                    <li>{items.item} {items.name}</li>
                  </div>
                )
              })}
            </ul>
          </div>
          console.log(screen)
          break;
        default:
      }

        return <div className="Inventory-container">

        <nav className="navbar fixed-top bg-custom-2 navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#"><h5>Lady Bird Atx</h5> </a>
            <a className="nav-item nav-link active" href="#"
            onClick={()=>{this.getdata();}}><span>Inventory</span></a>
            <a className="nav-item nav-link"  href="#"><span>Vendors</span></a>

            <a className="nav-item nav-link" href="#"
               onClick={()=>{this.getReorder();}}><span>Reorder</span></a>

            <a className="nav-item nav-link" href="#"
            onClick={()=>{this.createClick();}}
            ><span>Add Item</span></a>
          </div>
        </nav>

            {screen}



            <Footer />
        </div>

    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
