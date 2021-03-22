
import Grid from "@material-ui/core/Grid"
import OverView from "./Overview"
import Box from "@material-ui/core/Box"
import {Order} from "../requests"
import React, { Component } from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import moment from "moment"
import { Divider } from 'semantic-ui-react'
import Link from "@material-ui/core/Link"


const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    // style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
  };



class ViewOrdersPage extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             orders:[]
        }
    }


    componentDidMount(){
        Order.index()
        .then(orders=>{
          
          this.setState((state)=>{
            return{
              orders: orders
            }
          })
        })
      }
    
    render() {
     
       
        return (
        <Grid container justify="center" direction="column" style={{
          marginLeft:"22%"
        }}>
          <Grid item>           
           <Box style={{
              background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)",
              height:"7vh",
              width:"50vw",
              marginTop:"5%",
              marginLeft:"5%",
              marginRight:"5%"
            }}>
              <h1 className="mt-4">Order History</h1>
            </Box> 
            </Grid>
<Grid item>
            
              <Grid container direction="column" style={{
                marginTop:"5%",
                marginLeft:"5%",
                background:"#eeeeee",
                width:"50vw"
                
              }} alignItems="flex-start">

                
                <Grid item style={{
                  background:"#fafafa",
                  margin:"2%",
                  width:"48vw",
                  
                }}
                className="text-left">  
                {this.state.orders?this.state.orders.map((item,i)=>{      
                  return(
                    <>
                  <Grid container direction="row" key={i}>      
                    <Icon circular name="shipping fast" size="large" style={{
                      margin:"2%",
                      background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)"
                    }}/>
                    <h1>Order #{item.id}</h1>
                    <h3 style={{
                      marginTop:"4%",
                      marginLeft:"2%"
                    }}>| {moment(item.created_at).format("MMM Do, YYYY")}</h3>
                    <Grid container style={{
                      background:"#eeeeee",
                      margin:"4%"
                    }}
                    justify="center">
                      <Link href={`/orders/${item.id}`}>
                      <Grid item style={{
                        marginTop:"4%"
                      }}
                        
                     >
                      <Image.Group size='small' >
                      {item.actual_products.map((prod,i)=>{
                          return(
                            
                              <Image src={prod.images[0]} key={i} style={{boxShadow:"0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                              
                          )
                      })}
      
                      </Image.Group>
                      

                      </Grid>
                      </Link>


                    </Grid>

                    </Grid>
                    <Link href={`/orders/${item.id}`}>
                    <Button animated='vertical' style={{
                      background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)",
                      marginLeft:"43.5%"
                      
                    }}
                    >
                      <Button.Content visible>View Order</Button.Content>
                      <Button.Content hidden><Icon name="eye"/></Button.Content>
                    </Button>
                    </Link>
                    <Divider section/>
                    </>
                    )})
                  
                  :<p></p>}
                </Grid>
                  

              </Grid>
                  
               
              </Grid> 
        </Grid>

        )
    }
}

export default ViewOrdersPage
