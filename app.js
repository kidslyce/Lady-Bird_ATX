







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

// componentDidMount = () => {

//     this.getdata();
// }

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

onClickHandler = () => {
    this.getdata();
}



    render = () => {
        return <div className="Inventory-container">

            <Nav
            onClickHandler={this.onClickHandler}
            />

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

            <InventoryDetail
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

            <Footer />
        </div>

    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
