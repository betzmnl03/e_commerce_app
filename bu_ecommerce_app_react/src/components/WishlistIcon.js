
        
import React, { Component } from 'react'
import {Button} from "@material-ui/core"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Wishlist } from '../requests';
import FavoriteIcon from '@material-ui/icons/Favorite';

class WishlistIcon extends Component {


    constructor(props){
        super(props)
        this.state={
            wishlist:false
           
        }
    }
   
    handleWishlist=(event)=>{
        console.log("clicked")
        console.log(this.props.wishlisted, "this.props.wishlised")
        console.log("wishlist is",this.state.wishlist)
        if(this.props.wishlisted !==true){
            
            this.props.addWishlist(this.props.product.id)
            this.setState((state)=>{
                return{
                    wishlist:true
                }
            })
        }

    }
    


    render() {
        // console.log(this.props)
       
        return(           

            <FavoriteIcon 
            color={this.props.wishlisted===true|| this.state.wishlist ===true ?"secondary":"standard"}
            onClick={this.handleWishlist}
            />

        )
    }
}

export default WishlistIcon
