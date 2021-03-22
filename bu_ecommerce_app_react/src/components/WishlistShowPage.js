
import { Card, Icon, Image,Divider } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Cart, Wishlist } from '../requests'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

class WishlistShowPage extends Component {

    constructor(props){
        super(props)
        this.state={
            products:[]
        }
        // this.handle
    }

    
    componentDidMount(){
        Wishlist.index()
        .then((products)=>{
           
            this.setState((state)=>{

                return{
                    products: products
                }
            })
        })
    }

    handleRemove(id){
        this.props.removeWishlist(id)
        this.setState((state)=>{
            return{
                products: state.products.filter(p=>p.product.id !==id)
            }
        })
    }
    render() {
        // console.log(this.state.products)
        return (
            

            <Card.Group itemsPerRow={5} style={{
                marginLeft:"10%",
                marginTop:"2%"
            }}>
                {this.state.products? 
                
                    this.state.products.map((item,i)=>{
                        return(
                        <Card key={i} className="m-4">
                        <Image src={item.product.images[0]} wrapped ui={false} size="huge" style={{
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}/>
                        <Card.Content>
                        <Link href={`/products/${item.product.id}`}><Card.Header>{item.product.name}</Card.Header></Link>
                        <Card.Meta>${item.product.price}</Card.Meta>
                        <Card.Description>
                            {item.product.description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Button onClick={this.handleMove}>
                            <Icon name='cart' size="small"/>
                            MOVE TO CART
                        </Button>
                        
                        <Button onClick={()=>this.handleRemove(item.product.id)}> Remove
                        </Button>
                        </Card.Content>
                    </Card>)
                    })
                    :""
                }


            </Card.Group>
            
        )
    }
}



export default WishlistShowPage
