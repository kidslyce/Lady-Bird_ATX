// class CreateItem extends React.Component {

//   createItem = (event) => {
//     event.preventDefault();
//     axios.post(
//       '/lbatx',
//       {
//         item:this.state.newItemItem,
//         name:this.state.newItemName,
//         description:this.state.newItemDescription,
//         price: this.state.newItemPrice,
//         img:this.state.newItemImg,
//         cat: this.state.newItemCat,
//         qty:this.state.newItemQty,
//         reord_qty: this.state.newItemReord_Qty,
//       }
// ).then(
//   (response) => {
//       this.setState({
//           items: response.data
//       })
//   }
// )
// }



//   ///////////////  NEW ITEM   /////////////
//   changeNewItemItem = (event) => {
//     this.setState({
//         newItemItem:event.target.value
//     })
// }

// ///////////////  NEW NAME   /////////////
// changeNewItemName = (event) => {
//     this.setState({
//         newItemName:event.target.value
//     })
// }
// ///////////////  NEW DESCRIPTION   /////////////
// changeNewItemDescription= (event) => {
//     this.setState({
//         newItemDescription:event.target.value
//     })
// }
// ///////////////  NEW PRICE   /////////////
// changeNewItemPrice = (event) => {
//     this.setState({
//         newItemPrice:event.target.value
//     })
// }
//   ///////////////  NEW IMG   /////////////
// changeNewItemImg = (event) => {
//     this.setState({
//         newItemImg:event.target.value
//     })
// }
// ///////////////  NEW CAT   /////////////
// changeNewItemCat = (event) => {
//     this.setState({
//         newItemCat:event.target.value
//     })
// }
// ///////////////  NEW QTY   /////////////
// changeNewItemQty = (event) => {
//     this.setState({
//         newItemQty:event.target.value
//     })
// }
// ///////////////  NEW REORDER QTY   /////////////
// changeNewItemReord_Qty = (event) => {
//     this.setState({
//         newItemReord_Qty:event.target.value
//     })
// }


//   render = () => {
//     return <div>
//     <h2>Create Item</h2>
//             <form onSubmit={this.createItem}>
//               <input onKeyUp={this.changeNewItemItem} type="text" placeholder="item"/><br/>
//               <input onKeyUp={this.changeNewItemName} type="text" placeholder="name"/><br/>
//               <input onKeyUp={this.changeNewItemDescription} type="text" placeholder="description"/><br/>
//               <input onKeyUp={this.changeNewItemPrice} type="number" placeholder="price"/><br/>
//               <input onKeyUp={this.changeNewItemImg} type="text" placeholder="img"/><br/>
//               <input onKeyUp={this.changeNewItemCat} type="text" placeholder="cat"/><br/>
//               <input onKeyUp={this.changeNewItemQty} type="number" placeholder="qty"/><br/>
//               <input onKeyUp={this.changeNewItemReord_Qty} type="number" placeholder="reord_qty"/><br/>
//               <input type="submit" value="Create Item"/>
//             </form>
//             </div>
//   }

// }


class App extends React.Component {
  state = {
    items: []
}

componentDidMount = () => {
  this.getsomefingdata()

}

getsomefingdata = () => {
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


    render = () => {
        return <div>
            <CreateItem
             getdata={this.getsomefingdata.bind(this)}/>
            <h2>Inventory Detail</h2>
            <ul>
                {
                    this.state.items.map(
                        (items) => {
                            return <li>
                                <div><a href='#'>{items.img}:
                                {items.item}  {items.name}  {items.description}  {items.price} {items.cat}   {items.qty}  {items.reord_qty}
                                </a></div>

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
