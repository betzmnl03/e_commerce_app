import React, { Component } from 'react'
import {Product, Wishlist,Review} from "../requests"
import Grid from "@material-ui/core/Grid"
import ProductImages from './ProductImages'
import ProductDetails from "./ProductDetails"
import ViewSimilar from './ViewSimilar'
class ProductShowPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             product:{},
        }
        this.addReview = this.addReview.bind(this)
    }


    addReview(params,id){

        Review.create(params,id)
        .then((res)=>{
            this.componentDidMount()
        })
    }
            
   
    componentDidMount(){
        Product.show(this.props.match.params.id)
        .then(product=>{
           
                    this.setState((state)=>{
                            
                        return{
                            
                            product: product,
                            
                        }
                    })
        })
    
      }
   
    render() {
        // console.log(this.state.product.reviews)
       
        
        return (
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Grid container>
                        <Grid item sm={8}>
                           <ProductImages images={this.state.product.images}/>
                        </Grid>
                        <Grid item sm={4}>
                            <ProductDetails product={this.state.product} history={this.props.history} showCart={this.props.showCart} wishlisted={this.state.product.wishlisted} addWishlist={this.props.addWishlist} removeWishlist={this.props.removeWishlist} addReview={this.addReview}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>

                    <ViewSimilar id={this.props.match.params.id}/>
                            
                </Grid>

            </Grid>
            
        )
    }
}

export default ProductShowPage
