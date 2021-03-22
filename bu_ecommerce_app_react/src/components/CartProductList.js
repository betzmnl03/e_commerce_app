import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Segment,Icon } from 'semantic-ui-react'
import { Image} from 'semantic-ui-react'
import {Cart} from "../requests"



const sizeOptions = [
    {
      key: 's',
      text: 'S',
      value: 's',
    },
    {
      key: 'm',
      text: 'M',
      value: 'm',
    },
    {
      key: 'l',
      text: 'L',
      value: 'l',
    }
  ]

  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      // height: "40vh",
      // width: "50vw"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 300,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));
export default function CartProductList(props) {
    const classes = useStyles();
    const theme = useTheme();  
    const {cart,user,remove}=props
    const [size, setSize] = React.useState('');
    const [open, setOpen] = React.useState(false);
    

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick=(id,size)=>{
       
    }
    return (
            <Grid container direction="column" className="m-4">

                <Grid item>
                    <Grid container>
                        {cart?cart.map((item,i)=>{
                            return(
                                <div key={i}>
                            <Grid item className="m-4" key={i}>
                                <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>

                                   <Image src={item.product.images[0]} 
                                   size="large" 
                                   style={{
                                    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                  }}/>
                                    <div className={classes.details} key={item.id}>
                                        <CardContent className={classes.content}>
                                        <Typography component="h4" variant="h4" className="ml-4">
                                            {item.product.name}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary" className="mt-4 mb-4">
                                            Brand: {item.product.brand}
                                           
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary" className="mt-4 mb-4">
                                          
                                            Price: ${item.product.price}
                                        </Typography>
                                        <Grid item direction="column" >
                                            <Grid container direction="row" justify="center" id={item.id} key={item.id} name={item.id} className="ml-4">
                                            <Button circular>
                                              
                                              Size: {item.size[0].toUpperCase()}
                                             
                                            </Button>   
                                            <Button circular>
                                              
                                             Qty {item.quantity}
                                        
                                            </Button>                        
                                            </Grid>
                                            </Grid>
                                        
                                        <Grid container direction="row" style={{
                                          marginTop:"10%",
                                          marginLeft:"20%"
                                        }}>
                                          <Grid item>
                                        <Button animated="vertical" size="large" onClick={()=>remove(item.product.id)} style={{
                                          background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)"
                                        }}>
                                          <Button.Content visible>Remove</Button.Content>
                                          <Button.Content hidden>
                                            <Icon name='delete' />
                                        </Button.Content>
                                        </Button>


                                        </Grid>

                                        <Grid item>
                                        <Button animated="vertical" size="large"  style={{
                                          background:'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                                          color:"#fafafa"
                                        }}>
                                          <Button.Content visible>Wishlist</Button.Content>
                                          <Button.Content hidden>
                                            <Icon name='heart' />
                                        </Button.Content>
                                        </Button>
                                        </Grid>
                                        </Grid>
                                      
                                        </CardContent>
                                        </div>
                                    </Card>
                            </Grid>
                            </div>)
                        }):""}
                    </Grid>
                </Grid>
            
            </Grid>
       
    )
}
