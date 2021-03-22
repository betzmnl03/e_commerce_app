import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Carousel from 'react-bootstrap/Carousel'
import { Card, Icon, Image } from 'semantic-ui-react'
import ShareIcon from '@material-ui/icons/Share';
import {Link} from "react-router-dom"
import WishlistIcon from "./WishlistIcon"
import { black } from 'chalk';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:   200,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  }
}));

export default function ProductCards(props) {
  
   const {product} = props
   const[wishlist,setWishlist] = useState(false)
  const classes = useStyles();

  
  function handleClick(event){


    if(props.product.wishlisted!==true){
        props.addWishlist(product.id)
        setWishlist(false)
      
    }

  }
 
 
  return (
   
    <Card className={classes.root} key={product.id} style={{
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>

      
  

      <Image src={product.images[0]} wrapped ui={false} size="medium" />
      <Link to={`/products/${product.id}`} underline="none">

      <h3 className="mt-4">{product.name}</h3>  </Link>
     
      <CardActions>
 
        <IconButton aria-label="add to favorites"  >
          <WishlistIcon wishlisted={props.product.wishlisted} addWishlist={props.addWishlist} product={props.product} removeWishlist={props.removeWishlist}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <h2 style={{
          marginLeft:"30%",
          marginBottom:"10%"
        }}>${product.price}</h2>
      </CardActions>
      
    </Card>
  );
}
