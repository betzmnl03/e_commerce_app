
import Grid from "@material-ui/core/Grid"
import OverView from "./Overview"
import Box from "@material-ui/core/Box"
import {Order} from "../requests"
import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import moment from "moment"
import { Divider } from 'semantic-ui-react'
import Link from "@material-ui/core/Link"

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    // style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
  };



class ShowOrderPage extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             prods:{}
        }
    }


    componentDidMount(){
        Order.show(this.props.match.params.id)
        .then(prods=>{
          
          this.setState((state)=>{
            return{
              prods: prods
            }
          })
        })
      }
    
    render() {

      console.log(this.state.prods)
        return (
          <Grid container direction="column" style={{
            marginTop:"2%"
          }}>
            <Grid item>
                  
                  </Grid>
              <Grid item style={{
            marginTop:"2%",
            marginLeft:"22.5%",
            padding:"1%",
            width:"50vw",
            background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)"
          }}>
                  <h1>Order #{this.props.match.params.id}</h1>
                  <h1>Delivery Addres:</h1>
                  <Card.Description><strong>{`${this.state.prods.firstname} ${this.state.prods.lastname} | ${this.state.prods.phone}`}</strong></Card.Description>
                      {
                          this.state.prods.address?
                          
                        <Card.Meta>{this.state.prods.address.line1} {this.state.prods.address.line2},{this.state.prods.address.city},{this.state.prods.address.province}</Card.Meta>
                        
                      :""}
                    <Card.Meta>Contact: {this.state.prods.phone}</Card.Meta>
                      <Card.Description>
                      Amount: ${this.state.prods.amount}
                  </Card.Description>
                                                        
              
              </Grid>
              {this.state.prods.actual_products?this.state.prods.actual_products.map((item,i)=>{
                return(
                  <>
              <Grid item
              style={{
                margin:"2%"
                
              }}>
                
                  <Image.Group size='medium' style={{
                    background:"#f5f5f5",
                          boxShadow:"0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                         }}>
                
                    
                    {item.images.map((image,j)=>{
                      return(
                        <Image src={image} key={j} style={{
                        marginTop:"2%",
                      marginBottom:"2%",
                      boxShadow:"0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                      )
                    })}
                    
                    <h2>Size: {this.state.prods.ordered_products[i].size[0].toUpperCase()}</h2>
                    <h2>Price: ${this.state.prods.ordered_products[i].price}</h2>
              
                    </Image.Group>
                        
              </Grid>
              
              <Divider hidden />
              </>
              )
            }):""}


          </Grid>
        )
    }
}

export default ShowOrderPage
