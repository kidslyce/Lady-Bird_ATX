
class App extends React.Component {
  state = {
    items: []
}

componentDidMount = () => {
    this.getdata();
}


getdata = () => {
    axios.get('/lbatx').then(
        (response) => {
            this.setState({
                items: response.data
            }
        )
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

  createItem = (event) => {
      event.preventDefault();
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
).then(
    (response) => {
        this.setState({
            items: response.data
        })
    }
)
}


    render = () => {
        return <div>

         
            <CreateItem createdItem={this.updateItem}
                getdata={this.getdata.bind(this)}
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
                                    <input onKeyUp={this.changeUpdateItemItem} type="text" placeholder="item"/><br/>
                                    <input onKeyUp={this.changeUpdateItemName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdateItemDescription} type="text" placeholder="description"/><br/>
                                    <input onKeyUp={this.changeUpdateItemPrice} type="number" placeholder="price"/><br/>
                                    <input onKeyUp={this.changeUpdateItemImg} type="text" placeholder="img"/><br/>
                                    <input onKeyUp={this.changeUpdateItemCat} type="text" placeholder="cat"/><br/>
                                    <input onKeyUp={this.changeUpdateItemQty} type="number" placeholder="qty"/><br/>
                                    <input onKeyUp={this.changeUpdateItemReord_Qty} type="number" placeholder="reord_qty"/><br/>
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
