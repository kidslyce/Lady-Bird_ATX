
class App extends React.Component {
  state = {

    newItemItem: '',
    newItemName: '',
    newItemDescription: '',
    newItemPrice: '',
    newItemImg: '',
    newItemCat: '',
    newItemQty: '',
    newItemReord_Qty: '',
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
        item:this.state.newItemItem,
        name:this.state.newItemName,
        description:this.state.newItemDescription,
        price: this.state.newItemPrice,
        img:this.state.newItemImg,
        cat: this.state.newItemCat,
        qty:this.state.newItemQty,
        reord_qty: this.state.newItemReord_Qty,
      }
      )
    .then((response) => {
        console.log(response.data, 'create item response');
        
    })
    .then(() => {
        this.getdata();
    })
  }
///////////////  UPDATE ITEM   /////////////
  changeUpdateItemItem = (event) => {
      this.setState({
          updateItemItem:event.target.value
      })
  }
  ///////////////  UPDATE NAME   /////////////
  changeUpdateItemName = (event) => {
      this.setState({
          updateItemName:event.target.value
      })
  }

  ///////////////  UPDATE DESCRIPTION   /////////////
  changeUpdateItemDescription = (event) => {
    this.setState({
      updateItemDescription:event.target.value
    })
  }

  ///////////////  UPDATE PRICE   /////////////
  changeUpdateItemPrice = (event) => {
    this.setState({
      updateItemPrice:event.target.value
    })
  }
  ///////////////  UPDATE IMG   /////////////
  changeUpdateItemImg = (event) => {
    this.setState({
      updateItemImg:event.target.value
    })
  }
  ///////////////  UPDATE CAT   /////////////
  changeUpdateItemCat = (event) => {
    this.setState({
      updateItemCat:event.target.value
    })
  }
  ///////////////  UPDATE QTY   /////////////
  changeUpdateItemQty = (event) => {
    this.setState({
      updateItemQty:event.target.value
    })
  }
  ///////////////  UPDATE REORDER QTY   /////////////
  changeUpdateItemReord_Qty = (event) => {
    this.setState({
      updateItemReord_Qty:event.target.value
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
              item:this.state.updateItemItem,
              name:this.state.updateItemName,
              description:this.state.updateItemDescription,
              price: this.state.updateItemPrice,
              img:this.state.updateItemImg,
              cat: this.state.updateItemCat,
              qty:this.state.updateItemQty,
              reord_qty: this.state.updateItemReord_Qty,
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
        return <div>

         
            <CreateItem 
              createItem={this.createItem}
              onInputChange={this.onInputChange}
              newItemItem={this.state.newItemItem}
              newItemName={this.state.newItemName}
              newItemDescription={this.state.newItemDescription}
              newItemPrice={this.state.newItemPrice}
              newItemImg={this.state.newItemImg}
              newItemCat={this.state.newItemCat}
              newItemQty={this.state.newItemQty}
              newItemReord_Qty={this.state.newItemReord_Qty}
             
            />


            <h2>Inventory Detail</h2>
            <ul>
                {
                    this.state.items.map(
                        (items) => {
                            return <li>
                                {items.img}:
                                {items.item}: {items.name} :{items.description}
                                {items.price} : {items.cat}
                                {items.qty} : {items.reord_qty}
                                <button value={items.id} onClick={this.deleteItem}>
                                    DELETE
                                </button>
                                <details>
                                <summary>Click to Update</summary>
                                  <form id={items.id} onSubmit={this.updateItem}>
                                  <input onChange={this.onInputChange} name="newItemItem" value={this.state.newItemItem}type="text" placeholder="item"/><br/>
                <input onChange={this.onInputChange} name="newItemName" value={this.state.newItemName} type="text" placeholder="name"/><br/>
                <input onChange={this.onInputChange} name="newItemDescripton" value={this.state.newItemDescription}type="text" placeholder="description"/><br/>
                <input onChange={this.onInputChange} name="newItemPrice" value={this.state.newItemPrice}type="number" placeholder="price"/><br/>
                <input onChange={this.onInputChange} name="newItemImg" value={this.state.newItemImg}type="text" placeholder="img"/><br/>
                <input onChange={this.onInputChange} name="newItemCat" value={this.state.newItemCat}type="text" placeholder="cat"/><br/>
                <input onChange={this.onInputChange} name="newItemQty" type="number" value={this.state.newItemQty} placeholder="qty"/><br/>
                <input onChange={this.onInputChange} name="newItemReord_Qty" value={this.state.newItemReord_Qty} type="number" placeholder="reord_qty"/><br/>
                <input type="submit" value="Update Item"/>
                                </form>
                                </details>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
