import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import {Similar} from "../requests"
import { Card, Icon, Image,Divider } from 'semantic-ui-react'
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

export class ViewSimilar extends Component {

    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }

    componentDidMount(){
       
        Similar.show(this.props.id)
        .then((res)=>{
            this.setState((state)=>{
               return{
                   products:res
               }
            })
        })
    }
    render() {
       
        return (
            <>

            <h1 className="text-left ml-4">SIMILAR PRODUCTS</h1>
            <Grid container >

            <Card.Group style={{
                            marginLeft:"1%",
                            marginTop:"2%"
                        }}>
                            {this.state.products? 
                            
                                this.state.products.map((item,i)=>{
                                    return(
                                    <Card key={i} className="m-4">
                                    <Image src={item.images[0]} wrapped ui={false} size="small" style={{
                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}/>
                                    <Card.Content>
                                    <Link href={`/products/${item.id}`}><Card.Header>{item.name}</Card.Header></Link>
                                    <Card.Meta>${item.price}</Card.Meta>
                                    <Card.Description>
                                        {item.description}
                                    </Card.Description>
                                    </Card.Content>
                                </Card>)
                                })
                                :""
                            }


            </Card.Group>
            </Grid>
        </>
        )
    }
}

export default ViewSimilar
