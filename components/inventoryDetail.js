

class InventoryDetail extends React.Component{

    render = () => {
        return <div>

            <ul>
                {
                    this.props.items.map((item) => {
                        return (
                            <li>
                                {item.img}:
                                {item.item}: {item.name} :{item.description}
                                {item.price} : {item.cat}
                                {item.qty} : {item.reord_qty}
                                <button value={item.id} onClick={this.props.deleteItem}>
                                    DELETE
                                </button>
                                <details>
                                <summary>Click to Update</summary>
                                    <form id={item.id} onSubmit={this.props.updateItem}>
                                    <input onChange={this.props.onInputChange}  name="Item" value={this.props.Item} type="text" placeholder="item"/><br/>
                                    <input onChange={this.props.onInputChange} name="Name" value={this.props.Name} type="text" placeholder="name"/><br/>
                                    <input onChange={this.props.onInputChange} name="Descripton" value={this.props.Description}type="text" placeholder="description"/><br/>
                                    <input onChange={this.props.onInputChange} name="Price" value={this.props.Price}type="number" placeholder="price"/><br/>
                                    <input onChange={this.props.onInputChange} name="Img" value={this.props.Img}type="text" placeholder="img"/><br/>
                                    <input onChange={this.props.onInputChange} name="Cat" value={this.props.Cat}type="text" placeholder="cat"/><br/>
                                    <input onChange={this.props.onInputChange} name="Qty" type="number" value={this.props.Qty} placeholder="qty"/><br/>
                                    <input onChange={this.props.onInputChange} name="Reord_Qty" value={this.props.Reord_Qty} type="number" placeholder="reord_qty"/><br/>
                                    <input type="submit" value="Update Item"/>
                                </form>
                                </details>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
    }

}


