class InventoryDetail extends React.Component{
    
    render = () => {
        return <div>
        <h2>Inventory Detail</h2>
            <ul>
                {
                    this.items.map(
                        (items) => {
                            return <li>
                                {props.items.img}:
                                {props.items.item}: {props.items.name} :{props.items.description}
                                {props.items.price} : {props.items.cat}
                                {props.items.qty} : {props.items.reord_qty}
                                <button value={props.items.id} onClick={this.deleteItem}>
                                    DELETE
                                </button>
                                <details>
                                <summary>Click to Update</summary>
                                  <form id={items.id} onSubmit={this.props.updateItem}>
                                  <input onChange={this.props.onInputChange}  name="Item" value={this.props.state.Item} type="text" placeholder="item"/><br/>

                <input onChange={this.props.onInputChange} name="Name" value={this.props.state.Name} type="text" placeholder="name"/><br/>

                <input onChange={this.props.onInputChange} name="Descripton" value={this.props.state.Description}type="text" placeholder="description"/><br/>

                <input onChange={this.props.onInputChange} name="Price" value={this.props.state.Price}type="number" placeholder="price"/><br/>

                <input onChange={this.props.onInputChange} name="Img" value={this.props.state.Img}type="text" placeholder="img"/><br/>

                <input onChange={this.props.onInputChange} name="Cat" value={this.props.state.Cat}type="text" placeholder="cat"/><br/>

                <input onChange={this.props.onInputChange} name="Qty" type="number" value={this.props.state.Qty} placeholder="qty"/><br/>

                <input onChange={this.props.onInputChange} name="Reord_Qty" value={this.props.state.Reord_Qty} type="number" placeholder="reord_qty"/><br/>

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


    