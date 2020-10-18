class CreateItem extends React.Component {

  
    

    render = () => {
      return <div>
      <h2>Create Item</h2>
              <form onSubmit={this.props.createItem}>
                <input onChange={this.props.onInputChange} name="newItemItem" value={this.props.newItemItem} type="text" placeholder="item"/><br/>
                <input onChange={this.props.onInputChange} name="newItemName" value={this.props.newItemName} type="text" placeholder="name"/><br/>
                <input onChange={this.props.onInputChange} name="newItemDescription" value={this.props.newItemDescription} type="text" placeholder="description"/><br/>
                <input onChange={this.props.onInputChange} name="newItemPrice" value={this.props.newItemPrice} type="number" placeholder="price"/><br/>
                <input onChange={this.props.onInputChange} name="newItemImg" value={this.props.newItemImg} type="text" placeholder="img"/><br/>
                <input onChange={this.props.onInputChange} name="newItemCat" value={this.props.newItemCat} type="text" placeholder="cat"/><br/>
                <input onChange={this.props.onInputChange} name="newItemQty" type="number" value={this.props.newItemQty} placeholder="qty"/><br/>
                <input onChange={this.props.onInputChange} name="newItemReord_Qty" value={this.props.newItemReord_Qty} type="number" placeholder="reord_qty"/><br/>
                <input type="submit" value="Create Item"/>
              </form>
              </div>
    }

  }
