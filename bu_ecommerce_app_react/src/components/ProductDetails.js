import {Component} from 'react'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import moment from "moment"
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import {Cart,Review,Wishlist} from "../requests"
import {useState} from "react"
// import {Dropdown} from "react-semantic"
import { Dropdown,Form,Icon,Label, Divider} from 'semantic-ui-react'
import { render } from '@testing-library/react';
// import {Button } from '@material-ui/core';
import { Message, Button} from 'semantic-ui-react'
import WishlistButton from "./WishlistButton"
import { Progress,Rating} from 'semantic-ui-react'
import {Checkbox} from 'semantic-ui-react'
import { RateReviewOutlined } from '@material-ui/icons';


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
export default class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            quantity:1,
            size:"",
            message:"",
            error:"",
            text:"Wishlist",
            wishlistthis:false

        }
    }
    state = {}

    handleAdd=(event)=>{
       
        if(this.state.quantity>=0){
            this.setState((state)=>{
                return{
                    quantity: state.quantity+1
                }
            })
        }

    }
    
    handleSub=(event)=>{
       if(this.state.quantity>0){
        this.setState((state)=>{
            return{
                quantity: state.quantity-1
            }
        })
       }

    }

    addCart=(event)=>{

        if(this.state.quantity<=0){
          
           this.setState((state)=>{
               return{
                   error: "Please select the quantity"
               }
           })
        }
        else if(!this.state.value){
            this.setState((state)=>{
                return{
                   error: "Please select the size"
                }
            })
        }
        else {
            this.setState((state)=>{
                return{
                    message: ""
                }
            })
            Cart.create(this.props.product.id,this.state.value,this.state.quantity)
            .then((cart)=>{
                if(cart.id){
                    this.props.showCart()
                    this.props.history.push(`/cart`)
                }
                else if(cart.message){
                    this.setState((state)=>{
                        return{
                            message: "item already in cart"
                        }
                    })
                }
            })
            

            
        }
    }
    handleChange = (e, { value }) => this.setState({ value })


    handleclick=(event)=>{

           this.props.addWishlist(this.props.product.id)
            this.setState((state)=>{
           
                return{
                    wishlistthis: true,
                    text: "Wishlist"
                }
            })
       
    }

    handleReview=(event)=>{
        const formData= new FormData(event.currentTarget);
        const params={
            body: formData.get('body'),
            rating: this.state.rating
            
        }

        this.props.addReview(params,this.props.product.id)
        event.currentTarget.reset();
        this.setState((state)=>{
            return{
                rating:0
            }
        })

    }
    handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })
   
    render(){
       const { value } = this.state
        const {name,id,description,price,size,brand,reviews} = this.props.product
    return (
        
        <>
     
        <Grid container style={{
            marginTop:"6%",
            
        }} 
        justify="flex-start" direction="column">
            <Grid item className="text-left">
            <h1>{name}</h1>
            <h3 style={{
                color:"grey",
            }}>{description}</h3>
                <Button as='div' labelPosition='right'>
                    <Button icon content="Standard" basic >
                        <Icon name='comment alternate' className="ml-2"/>
                        Reviews
                    </Button>
                    <Label as='a' basic pointing='left' 
                    style={{
                        color:"#00b189 !important"
                        
                    }}>
                        2,048
                    </Label>
            </Button>
            <Divider section style={{
                marginRight: "10%"
            }}/>
            <h2>Price: ${price}</h2>
            <h4 style={{
                color:"#ff893f",
                marginTop:0,
                paddingTop:0,
            }}>inclusive of all taxes</h4>
            
                <Grid container>   
                    <Grid item><h3 className="mr-4 mb-2">SELECT QUANTITY</h3></Grid>
                    <Grid item><h4 className="ml-4" style={{
                        color:"#424242"
                    }}>Size Chart {">"}</h4></Grid>
                </Grid>
            </Grid>
            <Grid item>
                
                <Grid container direction="row">
                <Form>
                    <Form.Group widths='small' className="ml-4 mt-2 mb-4">
                  
                        <Button.Group >
                            <Button  onClick={this.handleAdd}  style={{
                                color:"black"
                            }}>+</Button>
                            <Button.Or text={this.state.quantity} className="text-dark" />
                            <Button onClick={this.handleSub}  style={{
                                color:"black"
                            }}>-</Button>
                        </Button.Group>
                        <p className="mt-4 ml-4 text-danger">{this.state.message}</p>
                    </Form.Group>
                    <Form.Group inline >
                    <h3 className="mb-2">SELECT SIZE</h3>
                    <Form.Radio 
                        label='Small'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                        className="ml-4"
                        style={{
                            fontSize:"large"
                        }}
                    />
                    <Form.Radio 
                        label='Medium'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                        style={{
                            fontSize:"large"
                        }}
                    />
                    <Form.Radio
                        label='Large'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                        style={{
                            fontSize:"large"
                        }}
                    />
                    
                    </Form.Group>
                    <Grid container>
                        <Grid item style={{
                            marginTop:"5%",
                            marginRight:"2%",
                            
                        }}>
                            <Button animated='vertical' onClick={this.addCart} style={{
                                background:'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                                color:"#fafafa"
                            }}>
                            <Button.Content hidden>
                                    <Icon name='shop' size="large" />
                                </Button.Content>
                                <Button.Content visible >ADD TO CART</Button.Content>
                                
                            </Button>
                        </Grid>
                        <Grid item>

           
                            <WishlistButton product={this.props.product.id} wishlisted={this.props.wishlisted} handleclick={this.handleclick} removeWishlist={this.props.removeWishlist} addWishlist={this.props.addWishlist}/>
                         </Grid>
                {this.state.error ? 
            <Message negative content={this.state.error} compact>

            </Message>
            :""}
                </Grid>
                </Form>

                </Grid>

            </Grid>
            <Divider section style={{
                marginRight: "10%"
            }}/>
           
            <Grid item className="text-left">  
            <h2>Product Details <Icon name="file alternate outline" size="small"/> </h2> 
            <p style={{
                fontSize:"large",
                marginRight:"10%"            }}>
                    Solid Casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket</p>
            <h2>{"Size & Fit "}</h2> 
            <p style={{
                fontSize:"large",
                marginRight:"10%"            }}>
                    Slim Fit</p>
                    <p style={{
                fontSize:"large",
                marginRight:"10%"            }}>
                    The model(height 6') is wearing a size Medium</p>
                    <h2>{"Material & Care"} </h2> 
                    <p style={{
                fontSize:"large",
                marginRight:"10%"            }}>
                    100%</p>
                    <p style={{
                fontSize:"large",
                marginRight:"10%"            }}>
                    Machine-wash</p>
                
            </Grid>
            <Divider section style={{
                marginRight: "10%"
            }}/>    
            <Grid item className="text-left">  
            <h2>WHAT CUSTOMER SAID  <Icon.Group size='small' className="ml-1">
                    <Icon name='star outline' />
                    <Icon corner='top right' name='star outline' />
                </Icon.Group> </h2> 
            
            <p>Fit (80% as expected)</p>
            
            <Progress size="small" color="teal" percent={80} style={{
                marginRight:"40%",
            }}/>

            <p>Length (80% as expected)</p>
            <Progress size="small" color="teal" percent={80} style={{
                marginRight:"40%",
            }}/>

                
            </Grid>

            <Divider section style={{
                marginRight: "10%"
            }}/>

            <Grid item className="text-left">  
            <h2>Customer Reviews  ({reviews? reviews.length+3 :3})</h2> 
            
            <p>Awesome</p>
            <Grid container>
                <p className="mr-4">Shadab Khan | Nov 26th 2020</p>
                <Rating defaultRating={4} maxRating={5} disabled icon="star"/>
            </Grid>


            <Divider section style={{
                marginRight: "10%"
            }}/>
                        <p>very good... go for it.. Nice Shirt</p>
            <Grid container>
                <p className="mr-4">Mindy | Nov 8th 2020</p>
                <Rating defaultRating={4} maxRating={5} disabled icon="star"/>
            </Grid>

            <Divider section style={{
                marginRight: "10%"
            }}/>
                        <p>Great product. The product is as expected</p>
            <Grid container>
                <p className="mr-4">John | Nov 8th 2020</p>
                <Rating defaultRating={4} maxRating={5} disabled icon="star"/>
            </Grid>
            </Grid>

            {reviews?
                reviews.map((review)=>{
                    console.log(review)
                    return(
                    <>
                    <Divider section/>
                    <p style={{
                        marginRight:"100%"
                    }}>{review.body}</p>
                    <Grid container>
                        <p >{review.reviewer} | {moment(review.created_at).format("MMM Do, YYYY")}</p>
                        <Rating defaultRating={review.rating} maxRating={5} disabled icon="star"/>
                    </Grid>
                    </>)
                    
                })
        
            :""}



            <Divider section style={{
                marginRight: "10%"
            }}/>
            <Grid item className="text-left">  
            <h2>Leave a Review</h2> 
            
            <Form onSubmit={this.handleReview} style={{
                marginRight: "20%"
            }}>
                
                <label>Comment</label>
                <input placeholder='Comment' name="body" />
                

                <Rating rating={this.state.rating} maxRating={5} onRate={this.handleRate} icon="star" className="ml-4"/>
                
                <Button type='submit'>Submit</Button>
            </Form>
           
            </Grid>

        </Grid>
 
        </>
    )
    }

}
