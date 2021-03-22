
        
import React, { Component } from 'react'
import {Button} from "@material-ui/core"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Wishlist } from '../requests';

class WishlistButton extends Component {


    constructor(props){
        super(props)
        this.state={
            wishlist: false
        }
    }
    handleWishlist=(event)=>{

       
        if(this.props.wishlisted !==true){
            this.props.addWishlist(this.props.product)
            this.setState((state)=>{
                return{
                    wishlist:true
                }
            })
        }

    }
    


    render() {
       
        return(           
            <Button 
            color="blue"
            variant={this.props.wishlisted===true|| this.state.wishlist ===true ?"contained":"outlined"}
            // className={classes.button}
            startIcon={<FavoriteBorderIcon />}
            color="standard"
            className="mt-4"
            style={{
                marginBottom:0
            }}
            onClick={this.handleWishlist}
                    >
               {this.props.wishlisted===true || this.state.wishlist===true ?"wishlisted":"wishlist"}

            </Button>

        )
    }
}

export default WishlistButton
